
def make_password(length, flagUpper, flagLower, flagDigit):
    text = ''

    if flagUpper and flagLower:
        text += 'A'
        if flagDigit:
            text += '0'

        text_len = length - len(text)
        for i in range(text_len):
            text += chr(97 + i)

        return text
    elif flagUpper and not flagLower:
        text = ''
        if flagDigit:
            text += '0'

        text_len = length - len(text)
        for i in range(text_len):
            text += chr(65 + i)

        return text
    elif not flagUpper and flagLower:
        text = ''
        if flagDigit:
            text += '0'

        text_len = length - len(text)
        for i in range(text_len):
            text += chr(97 + i)

        return text
    else:
        return ''.join(list(map(str, range(length))))


print(make_password(5, True, True, True))