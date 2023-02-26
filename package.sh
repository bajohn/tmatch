cd ./server
yarn build
cd ..
rm ./server/artifact/bundle.zip || true
cp server/package.json norm-app/dist/package.json
cd ./server/dist  
zip -r  ../artifact/bundle.zip *