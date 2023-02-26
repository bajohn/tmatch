cd ./server
yarn build
cd ..
rm ./server/artifact/bundle.zip || true
cp server/package.json norm-app/transpiled/package.json
cd ./server/transpiled  
zip -r  ../artifact/bundle.zip *