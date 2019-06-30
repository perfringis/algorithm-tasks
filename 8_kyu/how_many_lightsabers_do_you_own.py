def how_many_light_sabers_do_you_own(name=None):
    return 18 if str(name) == 'Zach' else 0

print(how_many_light_sabers_do_you_own("Zach"))
print(how_many_light_sabers_do_you_own())
print(how_many_light_sabers_do_you_own("zach"))