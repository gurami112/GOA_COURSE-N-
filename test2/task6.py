def funct(num1,num2):
    sum1 = num1 + num2
    
    sum1.sort()
    
    all_sum = sum(sum1)
    
    count = len(sum1)
    
    mean = all_sum / count
    
    return mean
    
print(funct([1, 2, 3],[4, 5, 6]))
        
        