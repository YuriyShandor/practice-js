var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
  console.log("Населення міста " + divs[i].textContent + " становить: " + divs[i].getAttribute('value') + " осіб");
  if (divs[i].getAttribute('value') < 1000000) {
    divs[i].hidden = true;
  }
}
