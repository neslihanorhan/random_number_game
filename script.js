var formCheck = document.getElementsByClassName("needs-validation")[0];
var randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

function processing() {
	formCheck.classList.add("was-validated");

	if(formCheck.checkValidity() == false) {
		return;
	}
	
	var userNumber = parseInt(document.getElementById("number").value);
	var message = document.getElementById("message");

	if (randomNumber === userNumber) {
		message.innerHTML = "Tebrikler doğru bildiniz.";
		randomNumber = Math.ceil((Math.random() * 10));
	} else {
		message.innerHTML = "Üzgünüz doğru sayıyı tahmin edemediniz.";
		if(randomNumber<userNumber) {
			message.innerHTML += " <br/> İpucu : Tahmin ettiğiniz sayıyı <u>azaltın</u>.";
		} else if (randomNumber > userNumber) {
			message.innerHTML += " <br/> İpucu : Tahmin ettiğiniz sayıyı <u>artırın</u>.";
		}
		document.getElementById("number").focus();
	}

	$("#form").find("input").each(function(index) {
		$(this).val("");
	})

	formCheck.classList.remove("was-validated");
}