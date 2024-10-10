# Write a function with the rules:

# returns true  / True if every element in an array is an integer or a float with no decimals.
# returns true  / True if array is empty.
# returns false / False for every other input.


# Test cases:
# [] -> True
# [1, 2, 3, 4] -> True
# [1.0, 2.0, 3.0] -> True
# [1.0, 2.0, 3.0001] -> False
#  -> False

def valid(arr):
    if len(arr) ==0:
        return True
    
    for i in arr:
        if type(i)==int or type(i) == float and  i == int(i):
            return True
        
    return False

print(valid([]))

print(valid([1, 2, 3, 4] ))

print(valid([1.0, 2.0, 3.0]))

print(valid([[1.0, 2.0, 3.0] ]))
