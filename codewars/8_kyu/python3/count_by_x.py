def count_by(x, n):
    return [x for x in range(x, x * (n + 1), x)]

print(count_by(1, 10))
print(count_by(2, 5))
