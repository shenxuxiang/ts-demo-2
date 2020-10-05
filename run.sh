#!/bin/bash
# 测试 webhook

git pull origin master

npm install

npm run build

cd ../

tar -czvf release.tar.gz ./ts-demo-2/dist/**
