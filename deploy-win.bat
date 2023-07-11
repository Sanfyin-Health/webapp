set arg1=%1

xcopy /S /I /E /Y .\dist\webapp\ ..\sanfyin-health.github.io

cd ..\sanfyin-health.github.io

git checkout main

git add .

git commit -m %arg1%

git push
