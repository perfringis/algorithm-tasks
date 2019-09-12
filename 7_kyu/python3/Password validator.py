def password(string):

    isLower = False
    isUpper = False
    isNumeric = False

    if len(string) >= 8:
        for letter in string:
            if letter.islower():
                isLower = True

                if isLower:
                    continue

            if letter.isupper():
                isUpper = True

                if isUpper:
                    continue

            if letter.isnumeric():
                isNumeric = True

                if isNumeric:
                    continue

        return isLower and isUpper and isNumeric
    else:
        return False
