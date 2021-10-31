# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())   
toprint = []
for i in range(n) :
    str = input()
    even,odd = "", ""   
    for j in range(0,len(str),1):
        if(j%2 == 0):
            even+=str[j]   
        
        else:
            odd+=str[j]                    
    
    toprint.append([even,odd]);  

for x in range(len(toprint)):

    print(toprint[x][0],toprint[x][1])
