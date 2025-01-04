@echo off
REM GregBuilder - A simple build script

echo Building project...

REM Set variables
set PROJECT_DIR=%~dp0
set BUILD_DIR=%PROJECT_DIR%build
set SRC_DIR=%PROJECT_DIR%src

REM Create build directory if it doesn't exist
if not exist "%BUILD_DIR%" (
    mkdir "%BUILD_DIR%"
)

REM Compile source files
echo Compiling source files...
REM Add your compilation commands here, for example:
REM For C files:
REM gcc -o "%BUILD_DIR%\output.exe" "%SRC_DIR%\*.c"
REM For C++ files:
REM g++ -o "%BUILD_DIR%\output.exe" "%SRC_DIR%\*.cpp"

REM Example for C++:
g++ -o "%BUILD_DIR%\output.exe" "%SRC_DIR%\*.cpp"

if %errorlevel% neq 0 (
    echo Compilation failed.
    exit /b %errorlevel%
)

echo Build completed successfully.

REM Pause to view output
pause