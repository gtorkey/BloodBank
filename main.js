var objaccounts = [
	{
		username: "torkey",
		password: "123456"
	},
	{
		username: "gtorkey",
		password: "123456"
	},
	{
		username: "galal",
		password: "123456"
	},
]
function getinfo(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	 for(i=0;i<objaccounts.length;i++)
		 {
			 if(username==objaccounts[i].username && objaccounts[i].password == password)
				 {
					 console.log("Successful");
					 document.getElementById("indexloginPage").style.display="contents";
					 document.getElementById("signinPage").style.display="none";
					 document.getElementById("dropdownMenuLink").innerHTML = "مرحبا " +username;
					 break;
				 }
			 else
				 {
					 console.log("unsuccessful!");
					 document.getElementById("username").style.border="2px solid red";
					 document.getElementById("password").style.border="2px solid red";
					 document.getElementById("incorrect").style.display="block";
				 }
		 }
}
//------------------------------------------------------------------------------------
