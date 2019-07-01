geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    return list(filter(lambda x: True if x not in geese else False, birds))


print(goose_filter(["Mallard", "Hook Bill", "African",
                    "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
print(goose_filter(["Mallard", "Barbary",
                    "Hook Bill", "Blue Swedish", "Crested"]))
print(goose_filter(["African", "Roman Tufted",
                    "Toulouse", "Pilgrim", "Steinbacher"]))
