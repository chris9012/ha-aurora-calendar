# Deploy Python files and event-icons to HA via Samba.
# Run with: npm run deploy
# The JS file is auto-deployed by the build step via rollup.config.js.

$HA = "\\homeassistant\config\custom_components\aurora_calendar"
$SRC = "$PSScriptRoot\..\custom_components\aurora_calendar"

Write-Host "Deploying Python files..." -ForegroundColor Cyan
$result = robocopy $SRC $HA *.py /NDL /NJH /NJS
if ($LASTEXITCODE -le 1) {
    Write-Host "  Python files OK" -ForegroundColor Green
} else {
    Write-Host "  Python copy failed (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying event-icons..." -ForegroundColor Cyan
$iconSrc = "$SRC\event-icons"
$iconDst = "$HA\event-icons"
if (Test-Path $iconDst) {
    $result = robocopy $iconSrc $iconDst /NDL /NJH /NJS
    if ($LASTEXITCODE -le 1) {
        Write-Host "  event-icons OK" -ForegroundColor Green
    } else {
        Write-Host "  event-icons copy failed (exit $LASTEXITCODE)" -ForegroundColor Red
    }
} else {
    Write-Host "  event-icons directory not found on HA — HA will create it on next reload" -ForegroundColor Yellow
    Write-Host "  Run 'npm run deploy' again after reloading the integration" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Done. Reload the integration in HA to apply changes." -ForegroundColor Green
