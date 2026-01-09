# package_portfolio.ps1
# Creates portfolio_package.zip containing screenshots, mock pages, demo script, and README files.

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$filesToInclude = @(
    "README.md",
    "PORTFOLIO.md",
    "DEMO_SCRIPT.md",
    "assets/screenshots/headshot.svg",
    "assets/screenshots/demo.svg",
    "assets/screenshots/README.md",
    "assets/mock_screenshots/homepage.html",
    "assets/mock_screenshots/article.html",
    "assets/mock_screenshots/dashboard.html",
    "assets/mock_screenshots/create-article.html",
    "assets/mock_screenshots/mobile-view.html"
)

$zipPath = Join-Path $root "portfolio_package.zip"

if(Test-Path $zipPath){ Remove-Item $zipPath }

Compress-Archive -Path $filesToInclude -DestinationPath $zipPath -Force

Write-Host "Created package: $zipPath"