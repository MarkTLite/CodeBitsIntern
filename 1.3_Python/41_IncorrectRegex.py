# Enter your code here. Read input from STDIN. Print output to STDOUT
import re
n, regs = int(input()),[]
for _ in range(n):  
    regs.append(input())
for x in regs:         
    try:
        match = re.match(x,'sdsdsdsd')
        print("True")
    except Exception as e:
        print("False")
 
