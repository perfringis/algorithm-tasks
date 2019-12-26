#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the compareTriplets function below.
def compareTriplets(a, b):
    alice = 0
    bob = 0
    for a_v, b_v in list(zip(a, b)):
        if a_v > b_v:
            alice += 1
        elif a_v < b_v:
            bob += 1

    return [alice, bob]


if __name__ == '__main__':
    a = [1, 2, 3]
    b = [3, 2, 1]

    result = compareTriplets(a, b)

    print(result)
