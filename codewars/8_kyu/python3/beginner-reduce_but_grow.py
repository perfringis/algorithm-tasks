import functools

def grow(arr):
    return functools.reduce(lambda x,y: x*y, arr)