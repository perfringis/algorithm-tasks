def odd_count(n):
    return len([x + 1 for x in range(n - 1) if x % 2 == 0])


print(odd_count(15))
