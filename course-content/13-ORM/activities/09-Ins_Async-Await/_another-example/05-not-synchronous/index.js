function cellPhone(contact ,duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Nice Chatting with you " + contact);
    }, duration * 1000);
  });
}
function getTime(){
	let date = new Date(); // want to use the same date for both getMinutes and getSeconds.
	let minutes = date.getMinutes();
	let fractionalMinutes = date.getSeconds()/60;
	return parseFloat(${minutes}.${fractionalMinutes});
}
function callFamily() {
	let timeNow = getTime();
	cellPhone("Aunt Barbra", 5).then(function(salutation){
		console.log(salutation);
		cellPhone("Aunt Louise", 5).then(function(salutation){
			console.log(salutation);
			cellPhone("Uncle John", 5).then(function(salutation){
				console.log(salutation);
				console.log((getTime() - timeNow) % 1);
			});
		});
	});
};



async function callFamilyAsync() {
	let timeNow = getTime();
	let salutationAuntBarbra = await cellPhone("The Great Aunt Barbra", 5);
		console.log(salutationAuntBarbra);
	let salutationAuntLouise = await cellPhone("The Great Aunt Louise", 5);
		console.log(salutationAuntLouise);
	let salutationUncleJohn = await cellPhone("The Bully Uncle John", 5);
		console.log(salutationUncleJohn);
	console.log((getTime() - timeNow) % 1);
			
};



callFamily();
callFamilyAsync();
console.log("This Happens before the callFamilyAsync() completes");
console.log("This Happens before the callFamily() completes");


// ===============How to resolve this call?
 
function cellPhoneAlt(contact ,duration, cb) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      cb();
      resolve("Nice Chatting with you " + contact);
    }, duration * 1000);
  });
}

async function callFamilyAsyncAlt(cb) {
	let timeNow = getTime();
	let salutationAuntBarbra = await cellPhone("The Great Aunt Barbra", 5, cb);
	console.log(salutationAuntBarbra);
	let salutationAuntLouise = await cellPhone("The Great Aunt Louise", 5, cb);
	console.log(salutationAuntLouise);
	let salutationUncleJohn = await cellPhone("The Bully Uncle John", 5, cb);
	console.log(salutationUncleJohn);
	console.log((getTime() - timeNow) % 1);
			
};

function CallPeople(){
	callFamilyAlt(function(){
		console.log("all done calling Family")
		callFamilyAsyncAlt(function(){
			console.log("all done calling The Great/Bully Family")
		});
	});
};


///=====================


function callFamily() {
	let timeNow = getTime();
	cellPhone("Aunt Barbra", 5).then(function(salutation){
		console.log(salutation);
		cellPhone("Aunt Louise", 5).then(function(salutation){
			console.log(salutation);
			cellPhone("Uncle John", 5).then(function(salutation){
				console.log(salutation);
				console.log((getTime() - timeNow) % 1);
			});
		});
	});
};

function callFamily() {
  let timeNow = getTime();

  cellPhone("Aunt Barbra", 5).then((salutation) => {
    console.log(salutation);
    return cellPhone("Aunt Louise", 5);
  }).then((salutation) => {
    console.log(salutation);
    return cellPhone("Uncle John", 5)
  }).then((salutation) => {
    console.log(salutation);
    console.log((getTime() - timeNow) % 1);    
  });
}

async function callFamily() {
  let timeNow = getTime();
  let salutation = null;

  salutation = await cellPhone("Aunt Barbra", 5);
  console.log(salutation);
  salutation = await cellPhone("Aunt Louise", 5);
  console.log(salutation);
  salutation = await cellPhone("Uncle John", 5)
  console.log(salutation);
  
  console.log((getTime() - timeNow) % 1);    
}



