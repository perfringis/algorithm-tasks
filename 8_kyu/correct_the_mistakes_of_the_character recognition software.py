def correct(string):
    return ''.join(["S" if x == "5" else ("O" if x == "0" else ("I" if x == "1" else x)) for x in string])


print(correct("L0ND0N"))
print(correct("DUBL1N"))
print(correct("51NGAP0RE"))
print(correct("BUDAPE5T"))
print(correct("PAR15"))
