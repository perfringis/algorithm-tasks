def clean_string(s):
    list_val = []
    stack = []

    for i in range(len(s)):
        if s[i].isalpha():
            list_val.append(s[i])
        elif s[i] == '#':
            if len(list_val) > 0:
                list_val.pop()

    print(list_val)

clean_string('abc#d##c')
