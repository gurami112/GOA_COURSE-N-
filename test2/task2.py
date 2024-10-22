# Write a function to find the longest common prefix among an array of strings. If there is no common prefix, return an empty string.

def same_prefix(arr):
   if len(arr) == 0:
       return ""
       prefix = arr[0]
    
    for i in arr[1:]:
        while not i.startwith(prefix):
            prefix = prefix[:-1]
            
return prefix
    
   
print(same_prefix(["flower", "flow", "flight"]))