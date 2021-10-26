function messageUser() {
  let name = prompt("What is your name?");
  let month = prompt("What month is your birthday? Write numbers between 1-12");
  let brazilianUc = document.querySelector(".brazilianUc");

  if (month === "1") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#pantanal'>Pantanal Mato-Grossense National Park <br/> Parque Nacional do Pantanal Mato Grossense</a></strong>";
  } else if (month === "2") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#noronha'>Fernando de Noronha Marine National Park <br/>Parque Nacional Marinho de Fernando de Noronha</a></strong>";
  } else if (month === "3") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#joaquim'> São Joaquim National Park <br/> <em>(Parque Nacional de São Joaquim)</em></a></strong>";
  } else if (month === "4") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#peruacu'> Cavernas do Peruaçu National Park <br/> <em>(Parque Nacional Cavernas do Peruaçu)</em></a></strong>";
  } else if (month === "5") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#iguacu'>Iguaçu National Park <br/> <em>(Parque Nacional de Foz do Iguaçu)</em></a></strong>";
  } else if (month === "6") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#jau'>Jaú National Park <br/> <em>(Parque Nacional do Jaú)</em></a></strong>";
  } else if (month === "7") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#diamantina'> Chapada Diamantina National Park<br/> <em>(Parque Nacional da Chapada Diamantina)</em></a></strong>";
  } else if (month === "8") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#capivara'> Serra da Capivara National Park <br/> <em>(Parque Nacional da Serra da Capivara)</em></a></strong>";
  } else if (month === "9") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#maranhenses'> Lençóis Maranhenses National Park <br/> <em>(Parque Nacional dos Lençóis Maranhanses)</em></a></strong>";
  } else if (month === "10") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#roraima'> Mount Roraima National Park <br/> <em>(Parque Nacional do Monte Roraima) </em></a></strong>";
  } else if (month === "11") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#orgaos'> Serra dos Órgãos National Park <br/> <em>(Parque Nacional da Serra dos Órgãos)</em></a></strong>";
  } else if (month === "12") {
    brazilianUc.innerHTML =
      "Hi, " +
      name +
      "! I suggest you visit <strong><br/><a href='#anavilhana'> Anavilhanas National Park<br/> <em>(Parque Nacional de Anavilhanas)</em></a></strong>";
  } else {
    alert("Ops, " + name + "! Remeber to write numbers between 1-12 😉");
  }
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", messageUser);
