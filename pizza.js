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
            name:"Kichik",
            size:25,
            price:25000
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
            name:"Qazi",
            price:15000
        },
        {
            name:"Kurka goshti",
            price:12000
        },
        {
            name:"Zaytun",
            price:5000
        },
        {
            name:"Qo'ziqorin",
            price:7000
        }
    ],
    addl:[
        {
            name:"Sosiska",
            price:7000
        }
    ]
}

var elPizzaSizeRadioTemplate = document.querySelector('.pizza-size-radio-template').content;
var elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;


var elPizzaForm = document.querySelector('.pizza-form');
var elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings');
var elPizzaSizes = elPizzaForm.querySelector('.pizza-form__size');

// input size object {size, name, price} output = HTML element

function createSizeRadio(size){
    var elSizeRadio = elPizzaSizeRadioTemplate.cloneNode(true);
    elSizeRadio.querySelector('.radio-input').value = size.size;
    elSizeRadio.querySelector('.radio__control').textContent = size.name + '' + size.size + '' + ' cm';

    return elSizeRadio;
}


// Option ichidagi topping qiymatlari checkbozlarini sahifaga joylash
function showPizzaSizeRadios(){
    var elSizeRadiosFragment =  document.createDocumentFragment();

    pizzaOptions.sizes.
    slice().
    sort(function (a, b){
        return a.size - b.size;
    }).forEach(function (size){
        elSizeRadiosFragment.appendChild(createSizeRadio(size));
    });
    elPizzaSizes.appendChild(elSizeRadiosFragment);
}



function createToppingCheckbox(topping){
    var elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
    elToppingCheckbox.querySelector('.checkbox-input').name = topping.name;
    elToppingCheckbox.querySelector('.checkbox-control').textContent = topping.name;
    return elToppingCheckbox;
}


function showPizzaToppings(){
    var elToppingsFragment = document.createDocumentFragment();
    pizzaOptions.toppings.
    slice().
    sort(function (a, b){
        if(a.name > b.name) {
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    }).
    forEach(function(topping){
        elToppingsFragment.appendChild(createToppingCheckbox(topping));
    });
    elPizzaToppings.appendChild(elToppingsFragment); 
}
showPizzaSizeRadios();
showPizzaToppings();



var elsSizeRadio = document.querySelectorAll('.radio-input');

if(elsSizeRadio.length > 0){
    elsSizeRadio.forEach(function(radio){
      radio.addEventListener('change', function(){
          console.log(radio.value)
      })
    })
}


