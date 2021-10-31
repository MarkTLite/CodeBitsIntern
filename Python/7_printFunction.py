from __future__ import print_function
if __name__ == '__main__':
    n = int(input()) 
    values = [x for x in range(1,n+1)]   
    print(*values, sep='')
