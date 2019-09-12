def enough(cap, on, wait):
    return 0 if cap >= on + wait else on + wait - cap

print(enough(10,5,5))
print(enough(100,60,50))
print(enough(20,5,5))