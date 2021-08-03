let pizzaOptions = {
    breadTypes: [
        {
            name:"Yupqa",
            price:10000
        },
        {
            name:"Qalin",
            price:1000
        },
        {
            name:"Buxanka",
            price:7000
        }
    ],
    sizes:[
        {
            name:"Kichik",
            size:25,
            price:25000
        },
        {
            name:"O'rtacha",
            size:30,
            price:30000
        },
        {
            name:"Katta",
            size:35,
            price:45000
        },
        {
            name:"Oilaviy",
            size:40,
            price:50000
        }
    ],
    toppings: [
        {
            name:"Pomidor",
            price:4000
        },
        {
            name:"Tuzlangan bodring",
            price:5000
        },
        {
            name:"Pomidor",
            price:4000
        },
        {
            name:"Pomidor",
            price:4000
        },
        {
            name:"Pomidor",
            price:4000
        }
    ],
    addl:[
        {
            name:"Sosiska",
            price:7000
        }
    ]
}

var elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;
var elPizzaForm = document.querySelector('.pizza-form');
var elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings')

function createToppingCheckbox(topping){
    var elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
    elToppingCheckbox.querySelector('.checkbox-input').name = topping.name;
    elToppingCheckbox.querySelector('.checkbox-control').textContent = topping.name;
    return elToppingCheckbox;
}


// Option ichidagi topping qiymatlari checkbozlarini sahifaga joylash

pizzaOptions.toppings.forEach(function(topping){
   elPizzaToppings.appendChild(createToppingCheckbox(topping));
});