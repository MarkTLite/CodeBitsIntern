def mutate_string(string, position, character):
    strlist = list(string)
    strlist[position]= character
    string = "".join(strlist) 
    return string

