#!/bin/bash
# 测试 webhook

git pull origin master

npm install

npm run build

tar -czvf release0.0.1.tar.gz ./dist/**
