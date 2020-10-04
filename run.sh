#!/bin/bash
# 测试 webhook

git pull origin master

echo "已经拉取到了最新的代码"
npm run build

echo "本地构建完成"
