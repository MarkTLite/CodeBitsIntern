

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i=0; i<s.length ;i++){
     var l = s.substr(i,1);      
     if (l == 'a' || l == 'e' || l == 'i'|| l == 'o'|| l == 'u'){
       console.log(l);
     }     
     
   }
 for(let i=0; i<s.length ;i++){
     var l = s.substr(i,1);      
     if (l == 'b' || l == 'c' || l == 'd'|| l == 'f'||
         l == 'g'||l == 'h' || l == 'j' || l == 'k'|| l == 'l'|| l == 'm'
        ||l == 'n' || l == 'p' || l == 'q'|| l == 'r'|| l == 's'||
        l == 't' || l == 'v' || l == 'w'|| l == 'x'|| l == 'y'||l == 'z'){
       console.log(l);
     }     
     
   }
}

