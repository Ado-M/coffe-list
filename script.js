var coffeList = [
  {
    Navn: "Cappuccino",
    Pris: 40,
    informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam",

    navn: function () {
      return this.Navn + " " + this.informasjon;
    },
    bildet: "../JS13-Personer/img/Cappachino.jpg",
  },

  {
    Navn: "Americano",
    Pris: 60,
    informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam",

    navn: function () {
      return this.Navn + " " + this.informasjon;
    },
    bildet: "../JS13-Personer/img/Americano.jpg",
  },

  {
    Navn: "Espresso",
    Pris: 15,
    informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam",

    navn: function () {
      return this.Navn + " " + this.informasjon;
    },
    bildet: "../JS13-Personer/img/Espresso.jpg",
  },

  {
    Navn: "Macchiato",
    Pris: 120,
    informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam",

    navn: function () {
      return this.Navn + " " + this.informasjon;
    },
    bildet: "../JS13-Personer/img/Macchiato.jpg",
  },

  {
    Navn: "Latte",
    Pris: 320,
    informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laboriosam",

    navn: function () {
      return this.Navn + " " + this.informasjon;
    },
    bildet: "../JS13-Personer/img/Latte.jpg",
  },
];

function changeBackground() {
    var backGroundImg = document.getElementById("back_img");
    var input = document.getElementById("your_order");
    var inptValue = input.value.trim();
    var coffeeInfoContainer = document.getElementById("coffee_container");


    for (let i = 0; i < coffeList.length; i++) {
        if (coffeList[i].Navn === inptValue) {
            backGroundImg.src = coffeList[i].bildet;
            
            var infoDiv = document.createElement("div");
            infoDiv.className="info_Div"
            var nameP = document.createElement("p");
            var priceP = document.createElement("p");
            var descriptionP = document.createElement("p");

            nameP.textContent = "Navn: " + coffeList[i].Navn;
            priceP.textContent = "Pris: " + coffeList[i].Pris + " kr";
            descriptionP.textContent = coffeList[i].informasjon;

            infoDiv.appendChild(nameP);
            infoDiv.appendChild(priceP);
            infoDiv.appendChild(descriptionP);

            coffeeInfoContainer.appendChild(infoDiv);

            return;
        }
    }

    alert("Beklager, vi har ikke denne bestillingen");
}
function populateCoffeeSelect() {
    var select = document.getElementById('coffeeSelect');
    coffeList.forEach(function(coffee) {
        var option = document.createElement('option');
        option.value = coffee.Navn;
        option.textContent = coffee.Navn;
        select.appendChild(option);
    });
}

function addSelectionToInput() {
    var select = document.getElementById('coffeeSelect');
    var input = document.getElementById('your_order');
    input.value = select.options[select.selectedIndex].value;
}

populateCoffeeSelect();

