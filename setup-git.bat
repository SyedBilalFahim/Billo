@echo off
echo Setting up Git repository for Bilal Portfolio...
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git first:
    echo 1. Go to https://git-scm.com
    echo 2. Download and install Git for Windows
    echo 3. Restart this script
    pause
    exit /b 1
)

echo Git is installed. Proceeding with repository setup...
echo.

REM Initialize git repository
echo Initializing git repository...
git init

REM Add all files
echo Adding files to git...
git add .

REM Make first commit
echo Making initial commit...
git commit -m "Initial portfolio website with testimonials"

echo.
echo Repository setup complete!
echo.
echo Next steps:
echo 1. Create a repository on GitHub.com
echo 2. Copy the repository URL
echo 3. Run: git remote add origin YOUR_REPOSITORY_URL
echo 4. Run: git push -u origin main
echo.
pause 