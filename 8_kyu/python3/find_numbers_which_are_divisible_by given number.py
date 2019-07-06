def divisible_by(numbers, divisor):
    return list(filter(lambda x: x % divisor == 0, numbers))


print(divisible_by([1, 2, 3, 4, 5, 6], 2))
print(divisible_by([1, 2, 3, 4, 5, 6], 3))
print(divisible_by([0, 1, 2, 3, 4, 5, 6], 4))
print(divisible_by([0], 4))
print(divisible_by([1, 3, 5], 2))
