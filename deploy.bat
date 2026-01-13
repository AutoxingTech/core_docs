@echo off
setlocal enabledelayedexpansion

echo [1/5] Building static files...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    exit /b 1
)

echo [2/5] Entering build directory...
cd build

REM Access Check
if not exist "index.html" (
    echo [ERROR] Build output not found in build directory!
    cd ..
    exit /b 1
)

REM Create .nojekyll to prevent GitHub Pages from ignoring files starting with underscore
echo. > .nojekyll

echo [3/5] Initializing temporary git repo...
git init
git add -A
git commit -m "deploy: %date% %time%"

echo [4/5] Force pushing to GitHub...
REM Using SSH for deployment as requested
git push -f git@github.com:autoxingtech/core_docs.git master:gh-pages

echo [5/5] Cleaning up...
cd ..
echo [SUCCESS] Deployment complete!
pause
