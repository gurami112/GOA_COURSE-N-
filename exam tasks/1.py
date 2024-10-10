# Determine if a walk (given as an array of directions) takes exactly 10 minutes 
# and returns you to the starting point.

# Args:
# walk (list of str): List of one-letter direction strings ('n', 's', 'e', 'w').
# Each direction takes 1 minute (so list with length of 10 elements takes 10 minutes)

# Returns:
# bool: True if the walk is exactly 10 minutes and returns to start, False otherwise.

# Test Cases:
# ['w','e','w','e','w','e','w','e','w','e','w','e'] -> False
# ['n','s','n','s','n','s','n','s','n','s'] -> True
# ['n','n','n','s','n','s','n','s','n','s'] -> False
# ['e', 'e', 'w', 'n', 'n', 's', 'e', 'w', 'n', 's'] -> False
# ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'] -> True


def walk(direction):
    if len(direction) != 10:
        return False
    

    n_c = direction.count("n")

    s_c =direction.count("s")

    e_c = direction.count("e")

    w_c = direction.count("w")

    if n_c != s_c or e_c != w_c:
        return True
    
    return False
    
direction = ['n','s','n','s','n','s','n','s','n','s']

print(walk(direction))

