import { NextResponse } from "next/server"

// IMPORTANT: Replace with your actual Google Apps Script URL after deployment
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz11_0CbajNjip4VjZdDVmZiBjw-bEylflcQhX77AO0M2NAB-o-jpRVJB_q9n0Y6UHF/exec"

/** Helper: follow the Google redirect and return JSON (or throw) */
async function fetchGoogleAppsScript(body: unknown) {
  console.log("=== LOAN APPLICATION API DEBUG ===")
  console.log("1. Sending data to Google Apps Script:", JSON.stringify(body, null, 2))
  console.log("2. Google Apps Script URL:", GOOGLE_APPS_SCRIPT_URL)

  try {
    const primary = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body),
      redirect: "manual", // we'll handle redirects ourselves
    })

    console.log("3. Primary response status:", primary.status)
    console.log("4. Primary response headers:", Object.fromEntries(primary.headers.entries()))

    // If response is JSON already – great
    if (primary.headers.get("content-type")?.includes("application/json")) {
      const jsonResponse = await primary.json()
      console.log("5. Direct JSON response:", jsonResponse)
      return jsonResponse
    }

    // If we get a 3xx with Location → follow it
    if (primary.status >= 300 && primary.status < 400) {
      const location = primary.headers.get("location")
      console.log("6. Redirect location:", location)

      if (location) {
        const redirected = await fetch(location, { method: "GET" })
        console.log("7. Redirected response status:", redirected.status)
        console.log("8. Redirected response headers:", Object.fromEntries(redirected.headers.entries()))

        if (redirected.headers.get("content-type")?.includes("application/json")) {
          const jsonResponse = await redirected.json()
          console.log("9. Redirected JSON response:", jsonResponse)
          return jsonResponse
        }

        const redirectedText = await redirected.text()
        console.log("10. Redirected text response (first 500 chars):", redirectedText.slice(0, 500))
      }
    }

    // Last-chance fallback: try to find the URL in the HTML body
    const html = await primary.text()
    console.log("11. HTML response (first 500 chars):", html.slice(0, 500))

    const match = html.match(/<A HREF="([^"]+)"/i)
    if (match) {
      console.log("12. Found redirect URL in HTML:", match[1])
      const redirected = await fetch(match[1], { method: "GET" })
      console.log("13. Final redirect status:", redirected.status)

      if (redirected.headers.get("content-type")?.includes("application/json")) {
        const jsonResponse = await redirected.json()
        console.log("14. Final JSON response:", jsonResponse)
        return jsonResponse
      }

      const finalText = await redirected.text()
      console.log("15. Final text response (first 500 chars):", finalText.slice(0, 500))
    }

    console.error("16. FAILED: Unexpected response from Google Apps Script")
    throw new Error(`Unexpected response from verification service. Status: ${primary.status}`)
  } catch (error) {
    console.error("17. FETCH ERROR:", error)
    throw error
  }
}

export async function POST(request: Request) {
  console.log('=== LOAN APPLICATION API ROUTE DEBUG ===');
  console.log('Timestamp:', new Date().toISOString());

  try {
    const incoming = await request.json();
    console.log('Received data:', JSON.stringify(incoming, null, 2));

    // Add formType to the data
    const payload = {
      ...incoming,
      formType: 'loanApplication'
    };

    console.log('Data being sent to Google Apps Script:', JSON.stringify(payload, null, 2));

    console.log('Making request to:', GOOGLE_APPS_SCRIPT_URL);

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Raw response:', result);

    let parsedResult;
    try {
      parsedResult = JSON.parse(result);
      console.log('Parsed response:', parsedResult);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      console.log('Response was:', result);
      throw new Error('Invalid JSON response from Google Apps Script');
    }

    if (parsedResult.success) {
      console.log('✅ Loan application submitted successfully');
      return NextResponse.json({ success: true, message: 'Loan application submitted successfully!' });
    } else {
      console.error('❌ Google Apps Script returned error:', parsedResult.message);
      return NextResponse.json({ success: false, message: parsedResult.message || 'Unknown error from Google Apps Script' });
    }

  } catch (error) {
    console.error('=== LOAN APPLICATION API ERROR ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    let errorMessage = 'An unexpected error occurred';

    if (error.message.includes('fetch')) {
      errorMessage = 'Network error: Unable to connect to Google Apps Script. Please check your internet connection.';
    } else if (error.message.includes('JSON')) {
      errorMessage = 'Data format error: Invalid response from server.';
    } else if (error.message.includes('HTTP error')) {
      errorMessage = `Server error: ${error.message}`;
    }

    return NextResponse.json({
      success: false,
      message: errorMessage,
      debug: process.env.NODE_ENV === 'development' ? {
        error: error.message,
        stack: error.stack
      } : undefined
    }, { status: 500 });
  }
}
