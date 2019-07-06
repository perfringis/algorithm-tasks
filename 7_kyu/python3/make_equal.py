def count(integers, constant, offset):
    counter = 0

    for integer in integers:
        temp = integer

        while temp != constant:
            print('inside in while ' + str(temp != constant))
            if temp > constant:
                temp -= offset
                print('greater than ' + str(temp))
            else:
                temp += offset
                print('lower than ' + str(temp))

            if temp == constant:
                print('yes')
                counter += 1
                break
    
    return counter


print(count([11, 5, 3], 7, 2))
print(count([-4, 6, 8], -7, 2))
