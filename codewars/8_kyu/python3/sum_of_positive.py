def positive_sum(arr):
    return sum(filter(lambda x: x >= 0, arr), 0)


print(positive_sum([-1, -1]))
