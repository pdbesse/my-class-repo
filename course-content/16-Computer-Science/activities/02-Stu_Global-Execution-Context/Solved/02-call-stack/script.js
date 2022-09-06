function main(){//this is a function declaration
	// foo();
	return console.log(farley());//this is a function invocation
}
function farley(){//this is a function declaration
	// bar();
	return "farley, " + bacon();//this is a function invocation
}

function bacon(){//this is a function declaration
	return "bacon, " + chicken(); ;//this is a func//this is a function invocationtion invocation
}
function chicken(){//this is a function declaration
	return "chicken";
}

main();//this is a function invocation: Defining a new function does not make the function run. To execute the function, we need a function call. This is also known as a function invocation.

//Call Stack: Last in First Out (LIFO);
// (like a stack of plates / pancakes)
// TODO list of function Invocation
// ["function chicken"]
// ["function bacon"]
// ["function farley"]
// ["function main"]


//Maximum call stack size exceeded: 16,000 call frames ~= invocation (added to stack)



function baby(count){
	if(count > 0){
		console.log("bababab: " + count);
		baby(count - 1);//breakpoint
		console.log(count, "Done");
	}else{ 
		console.log("BA BA BA");
	}
}

baby(5)


//Maximum call stack size exceeded: 16,000 call frames ~= invocation (added to stack)

function meow(){
	bark();//breakpoint
}

function bark(){
	meow();//breakpoint
}

meow();//this is a function invocation

