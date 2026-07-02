@echo off
rem Runs the daily vault sync; invoked by the "PhysicsGardenDailySync" Windows scheduled task.
cd /d "%~dp0"
python sync_vault.py >> sync_log.txt 2>&1
