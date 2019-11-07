#!/bin/python3

from math import ceil, floor, sqrt
import os
import random
import re
import sys


def encryption(s):
    s = s.replace(' ', '')
    length = len(s)
    sqrt_value = sqrt(length)
    columns = floor(sqrt_value)
    rows = ceil(sqrt_value)

    global_str = []
    if rows != columns:
        for i in range(0, columns + 1):
            temp_str = ''
            for j in range(i, length, columns + 1):
                temp_str += s[j]
            global_str.append(temp_str)
        return ' '.join(global_str)
    else:
        for i in range(0, columns):
            temp_str = ''
            for j in range(i, length, columns):
                temp_str += s[j]
            global_str.append(temp_str)
        return ' '.join(global_str)


if __name__ == '__main__':

    s = 'wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny'
    s = 'ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots'
    print(encryption(s))
