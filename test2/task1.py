# Given an array containing n-1 numbers taken from the range 1 to n, write a function to find the missing number. There are no duplicates in the array.

def find_missing_number(arr):
    n = len(arr) + 1
    sum_n = n * (n + 1) // 2
    sum_arr = sum(arr)
    return sum_n - sum_arr

print(find_missing_number([1, 2, 4, 5]))

print(find_missing_number([1]))

print(find_missing_number([2, 3, 1, 5]))
