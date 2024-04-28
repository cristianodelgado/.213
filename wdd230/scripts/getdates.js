let text = "Last Modification: " + document.lastModified;
document.getElementById("lastModified").innerHTML = text;
let nyear = new Date();
document.getElementById("year").innerHTML = nyear.getFullYear();