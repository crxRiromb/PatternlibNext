@echo OFF
echo.
echo --- Aenderungen erkannt. Starte Neustart-Prozess in 5 Sekunden...
ping 127.0.0.1 -n 6 > NUL
echo.
echo --- Fuehre 'npm install' aus...
call npm install
echo.
echo --- Starte den Dev-Server neu...
call npm run start:nowatch
