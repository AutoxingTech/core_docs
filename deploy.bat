@echo off
REM Build and deploy to GitHub Pages
REM Usage: deploy.bat

echo Building Docusaurus site...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed!
    exit /b 1
)

echo.
echo Deploying to GitHub Pages...
call npm run deploy

if %ERRORLEVEL% NEQ 0 (
    echo Deploy failed!
    echo.
    echo Make sure you have:
    echo 1. Set GIT_USER environment variable
    echo 2. Configured organizationName and projectName in docusaurus.config.js
    echo 3. Have push access to the repository
    exit /b 1
)

echo.
echo Deployment complete!
