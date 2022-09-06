var input = parseFloat((process.argv[2]));
var value = parseFloat((process.argv[3]));
var sum = 0;

if((input != null) && (value !=  null))
{
for(var i=0; i<input; i++){
    if(i % value == 0)
    sum = sum + i;
}
console.log("Result : " + sum);
}
if((input == null) && (value ==  null)){
    console.log("Please enter two numbers");
}
