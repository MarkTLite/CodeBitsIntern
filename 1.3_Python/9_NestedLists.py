def secondlowest(gradelist):
    n = len(gradelist)
    while (n!=0):    
        x = min(gradelist)
        gradelist.remove(x)
        
        n = len(gradelist) 
        if (min(gradelist)==x):            
            continue
        else:
            break

    return min(gradelist)

def list_duplicates_indexes(seq,item):
    start_at = -1
    locs = []
    while True:
        try:
            loc = seq.index(item,start_at+1)
        except ValueError:
            break
        else:
            locs.append(loc)
            start_at = loc
           
    return locs

def alphabeList_from(indexlist,names):
    alphlist = []    
    for x in indexlist:        
        alphlist.append(names[x])
    return sorted(alphlist,key=str.lower)    

if __name__ == '__main__':
    grades,names,saved = [],[],[]
    for _ in range(int(input())):
        name = input()
        score = float(input())
        grades.append(score)
        saved.append(score)
        names.append(name)    
    
    slowest = secondlowest(grades)    
    dupes = list_duplicates_indexes(saved,slowest)
    for x in alphabeList_from(dupes,names):
        print (x)
