@echo off
setlocal

echo Updating application...

:: Define variables
set "SOURCE_DIR=C:\path\to\source"
set "DEST_DIR=C:\path\to\destination"
set "BACKUP_DIR=C:\path\to\backup"

:: Create backup
echo Creating backup...
xcopy "%DEST_DIR%" "%BACKUP_DIR%" /E /I /Y

:: Copy new files
echo Copying new files...
xcopy "%SOURCE_DIR%" "%DEST_DIR%" /E /I /Y

echo Update complete.

endlocal
pause