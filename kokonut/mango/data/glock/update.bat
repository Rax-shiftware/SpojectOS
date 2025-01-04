@echo off
echo Updating system...

:: Update package lists
echo Updating package lists...
powershell -Command "Start-Process powershell -ArgumentList 'saps powershell -Verb runAs -ArgumentList \"winget upgrade --all\"' -Verb runAs"

:: Clean up
echo Cleaning up...
powershell -Command "Start-Process powershell -ArgumentList 'saps powershell -Verb runAs -ArgumentList \"winget clean\"' -Verb runAs"

echo Update complete.
pause
