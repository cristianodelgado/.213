const pass = document.querySelector("#password");
const conf = document.querySelector("#confirmation");
const message = document.querySelector("#message");

conf.addEventListener("focusout", passwordConfir);


function passwordConfir() {
    if (pass.value !== conf.value) {
        message.textContent = "❗password DO NOT MATCH!";
        message.style.visibility = "show";
        conf.style.backgroundColor = "#fff0f3";
        conf.value = " try again";
        pass.value = "";
        conf.value = "";
        pass.focus();
    }

    else {
        message.style.display = "none";
        conf.style.backgroundColor = "#fff";
        conf.style.color = "#000";
    }
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;

}