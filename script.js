const name = document.getElementById('name');
const pass = document.getElementById('pass');
const pass_2 = document.getElementById('pass-2');
const error = document.getElementById('error');

const btn = document.getElementById('button');

btn.addEventListener('click', (e)=>{

	if(name.value===''||name.value==null){
		e.preventDefault();
		error.innerText = 'Please fill in Username';
		name.classList.add('err');

		setTimeout(()=> name.classList.remove('err'),2000);
	}
	else if(pass.value===''||pass.value==null){
		e.preventDefault();
		error.innerText = 'Please fill in Password';
		pass.classList.add('err');

		setTimeout(()=> pass.classList.remove('err'),2000);
	}
	else if(pass_2.value===''||pass_2.value==null){
		e.preventDefault();
		error.innerText = 'Please fill in Confirm Password';
		pass_2.classList.add('err');

		setTimeout(()=> pass_2.classList.remove('err'),2000);
	}

	else if(pass.value.length!==8){
		e.preventDefault();
		error.innerText = 'Password should be 8 characters long!';
		pass.classList.add('err');

		setTimeout(()=> pass.classList.remove('err'),2000);

	}
	else if(pass.value !== pass_2.value){
		e.preventDefault();
		error.innerText = 'Passwords must match!!';
		pass_2.classList.add('err');

		setTimeout(()=> pass_2.classList.remove('err'),2000);
	}

	else{
		alert("Logged in successfully");
	}

});


// function removeError(a){
// 	error.remove();
// 	a.classList.remove('err');
// }