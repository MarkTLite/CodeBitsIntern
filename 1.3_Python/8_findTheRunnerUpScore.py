if __name__ == '__main__':
    n = eval(input())
    arr = map(int, input().split())
    array = list(arr)

    while (n!=0):    
        x = max(array)
        array.remove(x)
        n = len(array) 
        if (max(array)==x):            
            continue
        else:
            break

print(max(array))
