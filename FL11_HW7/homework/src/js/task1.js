let emailAddress = prompt('Dear user, please enter your email address:'),
	emailUser = 'user@gmail.com',
	emailAdmin = 'admin@gmail.com',
	passUser = 'Userpass',
	adminPass = 'AdminPass',
	password = '',
	emailLength = 6,
	passLength = 5;


if (!emailAddress) {
	alert('Canceled.')
} else if (emailAddress.length < emailLength) {
	alert('I dont know any emails having name length less than 6 symbols');
}

if (emailAddress === emailUser || emailAddress === emailAdmin) {
	password = prompt('Enter your password:')
} else {
	alert('I don’t know you');
}

if (!password) {
	alert('Canceled.');
} else if (emailAddress === emailUser && 
    password === passUser || emailAddress === emailAdmin && password === adminPass) {
	alert('Hello!')
} else {
	alert('Wrong password');
}

let passwordChange = confirm('Do you want to change your password?');
let newPass = '';
let oldPass = '';

if (passwordChange) {
	oldPass = prompt('Please write your password');
	if (emailAddress === emailUser && password === passUser || emailAddress === emailAdmin && password === adminPass) {
		newPass = prompt('Please write your new password')
	} else {
		alert('You have failed the change.');
	}
}

let passRepeat = '';
if (newPass.length < passLength) {
	alert('It’s too short password. Sorry.')
} else {
	passRepeat = prompt('Enter again your password');
	if (passRepeat === newPass) {
		alert('You have successfully changed your password.');
	} else {
		alert('You wrote the wrong password.');
	}
}