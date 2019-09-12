from math import floor


def litres(time):
    return floor(floor(time) / 2)


print(litres(2))
print(litres(1.4))
print(litres(12.3))
print(litres(0.83))
print(litres(11.8))
print(litres(1787))
print(litres(0))
