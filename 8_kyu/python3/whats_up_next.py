def next_item(xs, item):
    xs = list(xs)
    if item in xs and (xs.index(item)) == (len(xs) - 1):
        return None
    elif item in xs and xs.index(item) < len(xs) -1:
        return xs[xs.index(item) + 1]
    else:
        return None

print(next_item([1, 2, 3, 4, 5, 6, 7, 8], 5))
print(next_item(['a', 'b', 'c'], 'd'))
print(next_item(['a', 'b', 'c'], 'c'))
