#!/bin/bash

echo "当前的进程ID：$$"

echo "请输入name值"

declare name

read name;
if [[ name -eq "shenxuiang" ]]
	then
		echo "hi~ im $name"
	else
		echo "hello world"
fi

echo "userName = ${userName}"

