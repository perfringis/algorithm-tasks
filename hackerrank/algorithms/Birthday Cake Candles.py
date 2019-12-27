#!/bin/python3

import math
import os
import random
import re
import sys


# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):
    temp_ar = ar[:]
    counter = 0

    max_val = max(temp_ar)

    for x in temp_ar:
        if x == max_val:
            counter += 1

    return counter

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # ar_count = int(input())
    ar_count = 4

    # ar = list(map(int, input().rstrip().split()))
    ar = [3,1,2,3]

    print(birthdayCakeCandles(ar))

    # fptr.write(str(result) + '\n')
    # fptr.close()
