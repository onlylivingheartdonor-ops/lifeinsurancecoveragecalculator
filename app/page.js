"use client"

import { useState } from "react"

export default function Page() {
  const [income, setIncome] = useState(60000)
  const [years, setYears] = useState(20)
  const [debts, setDebts] = useState(0)
  const [savings, setSavings] = useState(0)

  const incomeCoverage = income * years
  const totalCoverageNeeded = incomeCoverage + debts - savings

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        background: "#f4f6fb",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* TOOL */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h1>Life Insurance Coverage Calculator</h1>

        <p>
          Estimate how much life insurance coverage you may need based on income,
          dependents, debts, and existing savings.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <label>Annual Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
          />

          <label>Years of Income to Replace</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
          />

          <label>Total Outstanding Debts</label>
          <input
            type="number"
            value={debts}
            onChange={(e) => setDebts(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
          />

          <label>Current Savings and Assets</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <p><strong>Estimated Coverage Needed:</strong> ${totalCoverageNeeded.toFixed(2)}</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>How This Works</h2>
        <p>
          This calculator estimates coverage by multiplying income by a chosen
          replacement period, then adjusting for debts and existing savings.
          Actual insurance needs vary by household and goals.
        </p>
      </div>

      {/* RELATED TOOLS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <div
  style={{
    background: "#ffffff",
    padding: "1.5rem",
    borderRadius: "10px",
    marginBottom: "1.5rem"
  }}
>
  <h2>Related Tools</h2>
  <ul>
    <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Credit Card Debt Payoff Calculator
    </li>
    <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Debt Reducing Calculator
    </li>
    <li onClick={() => window.location.href = "https://sidehustletaxestimator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Side Hustle Tax Estimator
    </li>
    <li onClick={() => window.location.href = "https://highyieldsavingscalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      High Yield Savings Calculator
    </li>
    <li onClick={() => window.location.href = "https://retirementsavingsgap.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Retirement Savings Gap
    </li>
    <li onClick={() => window.location.href = "https://lifeinsurancecoveragecalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Life Insurance Coverage Calculator
    </li>
    <li onClick={() => window.location.href = "https://onlinecourseroi.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Online Course ROI Calculator
    </li>
    <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Subscription Cost Calculator
    </li>
    <li onClick={() => window.location.href = "https://emailattachmentsize.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Email Attachment Size Checker
    </li>
    <li onClick={() => window.location.href = "https://gpacalculator.site"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      GPA Calculator
    </li>
    <li onClick={() => window.location.href = "https://youtubetitlechecker.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      YouTube Title Checker
    </li>
    <li onClick={() => window.location.href = "https://strongpasswordbuilder.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Strong Password Builder
    </li>
    <li onClick={() => window.location.href = "https://coolusernamegenerator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Cool Username Generator
    </li>
  </ul>
</div>
      </div>

      {/* DISCLAIMER + FOOTER */}
      <div style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
        This tool provides estimates for informational purposes only and is not insurance advice.
      </div>

      <div style={{ fontSize: "0.9rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/privacy"}
        >
          Privacy Policy
        </span>
        {" | "}
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/terms"}
        >
          Terms of Service
        </span>
      </div>
    </main>
  )
}
