#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):
    counter = 0

    prev = -1
    i = 0
    while i < len(ar):
        n = max(ar)
        if n == prev:
            

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # ar_count = int(input())
    ar_count = 4

    # ar = list(map(int, input().rstrip().split()))
    ar = [3,1,2,3]

    result = birthdayCakeCandles(ar)

    # fptr.write(str(result) + '\n')
    # fptr.close()
