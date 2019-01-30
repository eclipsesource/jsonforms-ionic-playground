#!/bin/bash

# based on https://gist.github.com/nicobytes/8c7c0a2139af48b9fc217d107d7e7cc0

git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
sed -i 's/base href="\/"/base href="\/jsonforms-ionic-playground\/"/' src/index.html
ionic build 
find . -type d ! -path './www*' ! -path './.git*' ! -path '.' | xargs rm -rf
rm -r  *.*
mv www/* .
rm -rf www
git add .
git commit -m "Publishing to github pages"
git push origin gh-pages
git checkout master
