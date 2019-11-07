def solve(text):
    vowels = 'aeiou'
    max_len = 0
    tmp_len = 0
    prev_vowel = False
    for letter in text:
        max_len = max(max_len, tmp_len)
        if not prev_vowel:
            tmp_len = 0
        if letter in vowels:
            tmp_len += 1
        prev_vowel = letter in vowels
    return max_len
