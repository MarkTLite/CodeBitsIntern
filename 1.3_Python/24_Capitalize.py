

# Complete the solve function below.
def solve(s):
    
    s_ar = s.split(' ')
    final_ar = []
    space = ' '
    for w in s_ar:
        final_ar.append(w.capitalize())
    return(space.join(final_ar))

