# You will be given a number and you will need to return it as a string in Expanded Form

# Test Cases:
# 70304 -> '70000 + 300 + 4'
# 42 -> '40 + 2'
# 710163 -> '700000 + 10000 + 100 + 60 + 3'
# 853546 -> '800000 + 50000 + 3000 + 500 + 40 + 6'
# 511604 -> '500000 + 10000 + 1000 + 600 + 4'

def string(num):
    string = str(num)

    p = []

    l = len(string)

    for i in range(l):

        n = string[i]

        place_value = l - i - 1

        

        if n != "0":
            