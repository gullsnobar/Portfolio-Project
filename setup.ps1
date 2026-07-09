# Gull Snobar Portfolio — One-time Setup Script
# Run this ONCE from C:\Users\HP\portfolio in PowerShell:
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#   .\setup.ps1

Write-Host "=== Gull Snobar Portfolio Setup ===" -ForegroundColor Cyan

# Step 1: Install all npm packages
Write-Host "`n[1/2] Installing packages..." -ForegroundColor Yellow
npm install --legacy-peer-deps

if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed. Try running manually: npm install --legacy-peer-deps" -ForegroundColor Red
    exit 1
}

Write-Host "`n[2/2] All done!" -ForegroundColor Green

Write-Host @"

Next steps:
  1. Fill in .env.local with your Supabase and Resend keys
  2. Run the SQL in supabase/schema.sql in your Supabase SQL Editor
  3. Place your resume PDF at: public\resume.pdf
  4. Update your GitHub URL in lib\data.ts
  5. Start the dev server:

       npm run dev

  Then open http://localhost:3000
"@ -ForegroundColor White
