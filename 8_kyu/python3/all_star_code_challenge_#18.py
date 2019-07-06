def str_count(string, letter):
    return sum(map(lambda x: x == letter, string))


print(str_count('hello', 'l'))
