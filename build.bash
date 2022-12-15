#!/bin/bash

BUILD_TIME=$(date '+%Y-%m-%d %H:%M:%S')

mkdir -p build
cp index.js build/index.js
cp bootstrap build/bootstrap
sed "s/{BUILD_TIME}/${BUILD_TIME}/" -i "build/index.js"