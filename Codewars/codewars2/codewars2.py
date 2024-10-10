#Alternate capitalization

#def capitalize(s):
#    Even = []
#    Odd = []
#    
#    for I in range(len(s)):
#        if I % 2 ==0:
#            Even.append(s[I].upper())
#            Odd.append(s[I])
#        else:
#            Even.append(s[I])
#            Odd.append(s[I].upper())
#    Evens = "".join(Even)
#    Odds = "".join(Odd)
#    
#    return [Evens,Odds]
    



#et character from ASCII Value

#ef get_char(c):
#   return chr(c)





#Minimize Sum Of Array (Array Series #1)

#def min_sum(arr):
#    arr.sort()
#    
#    min_sum =0
#    
#    for I in range(len(arr) // 2):
#        min_sum += arr[I] * arr[len(arr)-1 - I]
#        
#    return min_sum


#Find numbers which are divisible by given number
#
#
#def divisible_by(numbers, divisor):
#    Resul = []
#    
#    for I in numbers:
#        if I % divisor == 0:
#            Resul.append(I)
#            
#    return Resul
#    



#Sum consecutives

#def sum_consecutives(lst):
#    Rslt  = []
#    Crnt_sum = lst[0]
#    Laat_num = lst[0]
#    
#    for I in lst[1:]:
#        if I == Laat_num:
#            Crnt_sum += I
#        else:
#            Rslt.append(Crnt_sum)
#            Laat_num = I
#            Crnt_sum = I
#    Rslt.append(Crnt_sum)
#    return Rslt



#Mean Square Error

#def solution(array_a, array_b):
#   if len(array_a) != len(array_b):
#       return ValueError("Arrays must have equal length")
#   
#   n = len(array_a)
#   squared_diff_sum = 0
#   
#   for i in range(n):
#       diff = abs(array_a[i] - array_b[i])
#       squared_diff_sum += diff ** 2
#   
#   average = squared_diff_sum / n


#Human readable duration format

#def format_duration(seconds):
#    years = seconds // 31536000
#    days = (seconds % 31536000) // 86400
#    hours = ((seconds % 31536000) % 86400) // 3600
#    minutes = (((seconds % 31536000) % 86400) % 3600) // 60
#    seconds = (((seconds % 31536000) % 86400) % 3600) % 60
#
#    time_dict = {
#        "years": years,
#        "days": days,
#        "hours": hours,
#        "minutes": minutes,
#        "seconds": seconds,
#    }
#
#    time_list = []
#    for key, value in time_dict.items():
#        if value == 1:
#            time_list.append(value)
#            time_list.append(key[:-1]) 
#        elif value != 0:
#            time_list.append(value)
#            time_list.append(key)
#    
#    if not time_list:
#        return "now"
#    else:
#        
#        for i in time_list: 
#            lstn = [] 
#            z = 0
#            while z < len(time_list):
#                lstn.append(str(time_list[z]) + " " + time_list[z + 1])
#                z += 2
#            listn1 = ", ".join(lstn[:-2]) + ", "
#            listn2 = " and ".join(lstn[-2:])
#        if ", " == (listn1 + listn2)[:2]:
#            return (listn1 + listn2)[2:]
#        else:
#            return listn1 + listn2


#Word a10n (abbreviation)
#
#
#def abbreviate(s):
#    Out = []
#    word = ""
#    
#    for I in s:
#        if I.isalpha():
#            word += I
#        else:
#            if len(word) >= 4:
#                abbreviated_word = word[0] + str(len(word) - 2) + word[-1]
#                Out.append(abbreviated_word)
#            else:
#                Out.append(word)
#            Out.append(I)
#            word = ""
#    
#
#    if len(word) >= 4:
#        abbreviated_word = word[0] + str(len(word) - 2) + word[-1]
#        Out.append(abbreviated_word)
#    else:
#        Out.append(word)
#    
#    return ''.join(Out)



#Sums of Parts
#
#def parts_sums(ls):
#    total_sum = sum(ls)
#    result = []
#    current_sum = total_sum
#    
#    for num in ls:
#        result.append(current_sum)
#        current_sum -= num
#    
#    result.append(0)  
#    
#    return result

