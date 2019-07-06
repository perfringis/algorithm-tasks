def reverseWords(str):
    return ' '.join(str.split(' ')[-1::-1])


print(reverseWords("hello world!"))
