    # Cat years, Dog years

# def human_years_cat_years_dog_years(human_years):
#     listn = []
    
#     listn.append(human_years)
    
#     counter = 0
    
#     if human_years == 1:
#         listn.append(15)
#         listn.append(15)
#     elif human_years == 2:
#         listn.append(24)
#         listn.append(24)
#     else:
#         listn.append(24 + (human_years - 2) *4)
#         listn.append(24 + (human_years - 2) *5)
#     return listn


    # Find Nearest square number

# def nearest_sq(n):
#     lower = int(n**0.5)
#     upper = lower + 1    
#     lower_diff = abs(n - lower**2)
#     upper_diff = abs(n - upper**2)

#     if lower_diff < upper_diff:
#         return lower**2
#     else:
#         return upper**2



    # Sum of array singles

# def repeats(arr):
#     listn = []
#     for i in arr:
#         if arr.count(i) == 1:
#             listn.append(i)
#     return sum(listn)



   # Triangular Treasure

# def triangular(n):
#     if n < 0:
#         return 0
#     return n* (n+1) // 2




   # Find the Mine!

# def mine_location(field):
#     for i in range(len(field)):
#         for x in range(len(field[i])):
#             if field[i][x] == 1:
#                 return [i,x]
    

   # The Hashtag Generator

# def generate_hashtag(s):
#     if not s:
#         return False
    
#     hashtag = "#" + "".join(i.capitalize() for i in s.split())
    
#     if len(hashtag) > 140:
#         return False
    
#     return hashtag



    # So Many Permutations!

# def permutations(s):
#     if len(s) == 1:
#         return [s]
    
#     p = set()
    
#     for i in s:
#         remaining_chars = s.replace(i, "", 1)
#         sub_perms = permutations(remaining_chars)
        
#         for sub_perm in sub_perms:
#             p.add(i + sub_perm)
    
#     return list(p)