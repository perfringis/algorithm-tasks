#!/bin/python3
import sys
import re
import random
import os
import math

# n = 6
# (0,5)
# (1,4)(1,5)
# (2,3)(2,4)(2,5)
# (3,2)(3,3)(3,4)(3,5)
# (4,1)(4,2)(4,3)(4,4)(4,5)
# (5,0)(5,1)(5,2)(5,3)(5,4)(5,5)


def staircase(n):
    text = ''
    for i in range(0, n):
        text += (n-i) * chr(32)
        for j in range(n-i-1, n):
            text += '#'
        text += '\n'

    print(text[0:len(text) - 1], end='')


if __name__ == '__main__':
    n = int(input())

    staircase(n)


    #
   ##
  ###
 ####