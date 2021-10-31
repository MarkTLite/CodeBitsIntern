# Enter your code here. Read input from STDIN. Print output to STDOUT
n, scores = int(input()),[]
for _ in range(n):  
    scores.append(list(input().split()))
for x in scores:         
    try:
        print(int(x[0])//int(x[1]))
    except ZeroDivisionError as e:
        print("Error Code:",e)
    except ValueError as e:
        print("Error Code:",e)    
