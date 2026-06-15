@echo off
cd /d "C:\Users\吴浩\support-qa"
echo Deploying Gus Support to Netlify...
call netlify deploy --prod --dir=.
echo.
echo Done! Site is live at https://golden-halva-84f52c.netlify.app
pause
