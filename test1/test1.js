function tellTime() {
	var now = new Date();
	var total = now.getHours();
	alert(total);
}


function checkMail(fieldId) {
	if (document.getElementById(fieldId).value === "") {
		alert("Please write a correct value");
	}
}

function checkZip() {
	var cityName;
	var zip = document.getElementById("zip").value;
	switch(zip){
		case "60608":
			cityName = "Chicago";
			break;

		case "68114":
			cityName = "Omaha";
			break;

		case "53212":
			cityName = "Milwaukee";
	}
	document.getElementById("city").value = cityName;
}

var newWindow = window.open();

newWindow.close();