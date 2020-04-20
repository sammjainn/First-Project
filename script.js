const name = document.getElementById('name');
const pass = document.getElementById('pass');
const pass_2 = document.getElementById('pass-2');
const error = document.getElementById('error');

const btn = document.getElementById('button');

btn.addEventListener('click', (e)=>{

	if(name.value===''||pass.value===''||pass_2.value===''||name.value==null||pass.value==null||pass_2.value==null){
		e.preventDefault();
		error.innerText= 'Please fill in all the fields.';
	}

	else if(pass.value.length!==8){
		e.preventDefault();
		error.innerText = 'Password should be 8 characters long!';
	}
	else if(pass.value !== pass_2.value){
		e.preventDefault();
		error.innerText = 'Passwords must match!!';
	}

	else{
		alert("Logged in successfully");
	}

});