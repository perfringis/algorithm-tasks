def set_alarm(employed, vacation):
    return True if employed == True and vacation == False else False

print(set_alarm(True, True))
print(set_alarm(False, True))
print(set_alarm(False, False))
print(set_alarm(True, False))