#!/bin/python3

import math
import os
import random
import re
import sys

def miniMaxSum(arr):
    min_arr = arr[:]
    max_arr = arr[:]

    sum_min = 0
    sum_max = 0

    for i in range(4):

        min_id = 0
        max_id = 0

        min_val = sys.maxsize
        max_val = -sys.maxsize - 1

        for idx, x in enumerate(min_arr):
            if x < min_val:
                min_val = x
                min_id = idx

        sum_min += min_arr[min_id]
        del min_arr[min_id]

        for idy, y in enumerate(max_arr):
            if y > max_val:
                max_val = y
                max_id = idy

        sum_max += max_arr[max_id]
        del max_arr[max_id]

    return [sum_min, sum_max]

if __name__ == '__main__':
    # arr = list(map(int, input().rstrip().split()))

    arr = [1,2,3,4,5]
    print(*miniMaxSum(arr), sep=' ')
