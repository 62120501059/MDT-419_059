window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
    const ID = urlParams.get('username');
    const Pass = urlParams.get('password');

	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(username.value != ID || password.value != Pass)
	{
		alert("Try Again");
		return false;
	}
	else
	{
		alert("Success");
	}

}



			