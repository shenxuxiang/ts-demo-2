#!/bin/bash
# shopt -s -o nounset

# export userName="shenxuxiang"

# userName="梁校松"

# ary=(11 22 33 44 55)
# len=${#ary[@]}
# echo "当前的进程ID：$$"

# for (( i=0; i < $len; i++ )); do
#         for (( j=0; j < $len; j++ )); do
#                 if (( $i >= 3 && $j >= 3 ))
#                 then
#                         source ./shenxx.sh
# 			break 2
#                 else
#                         echo "i = ${i}; j = ${j}"
#                 fi
#         done
# done

# week="Mon Tue Wed Thu Fri Sat Sun"
# select day in $week
# do
#     case $day in
#         "Mon") echo "today is Monday";;
#         "Tue") echo "today is Tuesday";;
#         "Wed") echo "today is Wednesday";;
#         "Thu") echo "today is Thusday";;
#         "Fri") echo "today is Friday";;
#         "Sat" | "Sun") echo "you can have a rest today";;
#     esac
#     break;
# done

# i=1
# j=1
# for (( i=1; i <= 9; i++ )); do
#     for (( j=1; j <= 9; j++ )); do
#         if (( j <= i )); then
#             let multi=$i*$j
#             echo -n "$i * $j = $multi   "
#         else 
#             break
#         fi
#     done
#     echo
# done

# set 11 aa 22 bb 33 cc
# shift 2

# for parame in $@; do
#     echo $parame
# done

# count=1

# while read line; do
#     userName=$(echo $line | cut -f1 -d " ")
#     passWord=$(echo $line | cut -f2 -d " ")
#     echo "userName: ${userName}, passWord: ${passWord}; "
#     let count++
# done < ./shen.txt

# echo $count


count=1
for user in $(cat ./shen.txt); do
    userName=$(echo $user | cut -f1 -d ":")
    passWord=$(echo $user | cut -f2 -d ":")
    echo "userName: ${userName}; passWord: ${passWord}"
    let count++
done

echo $count

