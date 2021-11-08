function processData(input) {
    //Enter your code here    
    var n = input.split("\n");    
    var toprint = [];
for (let i = 0; i<n[0]; i++ ){
    var str = n[i+1];
    var even = "", odd = "";   
    for(let j = 0; j<str.length; j++ ){
        if(j%2 == 0){
         even+=str[j];   
        }
        else{
            odd+=str[j]
        }            
    }
    toprint.push([even,odd]);  
}
for (let x = 0; x<toprint.length; x++)
{
    console.log(toprint[x][0],toprint[x][1])
}

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

