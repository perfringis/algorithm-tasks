#!/bin/python3

import math
import os
import random
import re
import sys


def miniMaxSum(arr):
    return '{0} {1}'.format(sum(nMinElements(arr, 4)), sum(nMaxElements(arr, 4)))


def nMinElements(arr, n):
    temp_arr = arr[:]
    final_arr = []

    for i in range(0, n):
        minimum = 999999

        for j in range(len(temp_arr)):
            if temp_arr[j] < minimum:
                minimum = temp_arr[j]

        final_arr.append(minimum)
        temp_arr.remove(minimum)

    return final_arr


def nMaxElements(arr, n):
    temp_arr = arr[:]
    final_arr = []

    for i in range(0, n):

        minimum = 

        final_arr.append(maximum)
        temp_arr.remove(maximum)

    return final_arr


def nElem(arr, n):
    if n == 1:
        return arr[0]
    return min(arr[n-1], nElem(arr, n-1))


if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    print(miniMaxSum(arr), end='')
