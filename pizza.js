let pizzaOptions = {
    breadTypes: [
      {
        name: "Yupqa",
        price: 10000
      },
      {
        name: "Qalin",
        price: 10000
      },
      {
        name: "Buxanka",
        price: 7000
      }
    ],
    sizes: [
      {
        name: "Katta",
        size: 35,
        price: 45000
      },
      {
        name: "Kichik",
        size: 25,
        price: 25000
      },
      {
        name: "Oilaviy",
        size: 40,
        price: 50000
      },
      {
        name: "O'rtacha",
        size: 30,
        price: 30000
      }
    ],
    toppings: [
      {
        name: "Pomidor",
        price: 4000
      },
      {
        name: "Birnima",
        price: 1000
      },
      {
        name: "Tuzlangan bodring",
        price: 5000
      },
      {
        name: "Qazi",
        price: 15000
      },
      {
        name: "Kurka go'shti",
        price: 12000
      },
      {
        name: "Zaytun",
        price: 5000
      },
      {
        name: "Qo'ziqorin",
        price: 7000
      }
    ],
    addl: [
      {
        name: "Sosiska",
        price: 7000
      }
    ]
  };
  let order = {
    type: [],
    size: [],
    topping: []
  };
  
  var elPizzaSizeRadioTemplate = document.querySelector('.pizza-size-radio-template').content;
  var elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;
  
  var elPizzaForm = document.querySelector('.pizza-form');
  var elPizzaSizes = elPizzaForm.querySelector('.pizza-form__sizes');
  var elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings');
  // input size object {size, name, price}, output - HTML element
  function createSizeRadio(size) {
    var elSizeRadio = elPizzaSizeRadioTemplate.cloneNode(true);
    elSizeRadio.querySelector('.radio__input').value = size.size;
    elSizeRadio.querySelector('.radio__control').textContent = size.name + ' ' + size.size + ' ' + ' cm';
    return elSizeRadio;
  }
  function showPizzaSizeRadios() {
    var elSizeRadiosFragment = document.createDocumentFragment();
    pizzaOptions.sizes
      .slice()
      .sort(function (a, b) {
        return a.size - b.size;
      })
      .forEach(function (size) {
        elSizeRadiosFragment.appendChild(createSizeRadio(size))
      });
    elPizzaSizes.appendChild(elSizeRadiosFragment);
  }
  function createToppingCheckbox(topping) {
    var elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
    elToppingCheckbox.querySelector('.checkbox__input').name = topping.name;
    elToppingCheckbox.querySelector('.checkbox__control').textContent = topping.name;
    return elToppingCheckbox;
  }
  // Options ichidagi topping qiymatlari checkboxlarini sahifaga joylash
  // method chaining
  function showPizzaToppings() {
    var elToppingsFragment = document.createDocumentFragment();
    pizzaOptions.toppings
      .slice()
      .sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      .forEach(function (topping) {
        elToppingsFragment.appendChild(createToppingCheckbox(topping));
      });
    elPizzaToppings.appendChild(elToppingsFragment);
  }
  showPizzaSizeRadios();
  showPizzaToppings();
  var elTypeSelect = document.querySelector('.pizza-form__field');
  var pizzaFormTypeResult = document.querySelector('.pizza-form__type-result');
  elTypeSelect.addEventListener('change', function () {
    pizzaOptions.breadTypes.forEach(breadType => {
      if (breadType.name === elTypeSelect.value) {
        order.type[0] = breadType;
        pizzaFormTypeResult.textContent = order.type[0].name;
      }
    });
    calculatePrice();
  });
  var elSizeRadio = document.querySelectorAll('.radio__input');
  var pizzaFormSizeResult = document.querySelector('.pizza-form__size-result');
  elSizeRadio.forEach(function (radio) {
    radio.addEventListener('change', function () {
      pizzaOptions.sizes.forEach(size => {
        if (size.size == Number(radio.value)) {
          pizzaFormSizeResult.textContent = radio.value + " sm";
          order.size[0] = size;
        }
      });
      calculatePrice()
    });
  });
  var elTopppingsCheckboxs = document.querySelectorAll('.checkbox__input');
  var pizzaFormToppingsResultsList = document.querySelector('.pizza-form__toppings-results-list');
  elTopppingsCheckboxs.forEach(checkbox => {
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        pizzaOptions.toppings.forEach(toppings => {
          if (toppings.name === checkbox.name) {
            order.topping.push(toppings);
            createitem(toppings)
          }
        });
      } else {
        for (let i = 0; i < order.topping.length; i++) {
          if (order.topping[i].name === checkbox.name) {
            order.topping.splice(i, i + 1)
            createitem(checkbox)
          }
        }
      }
      calculatePrice()
    });
  })
  let sums = document.querySelector('.pizza-form__sum-result');
  let calculatePrice = function () {
    let sum = 0;
    if (order.type.length > 0) {
      sum += order.type[0].price;
    }
    if (order.size.length > 0) {
      sum += order.size[0].price;
    }
    if (order.topping.length > 0) {
      order.topping.forEach(ordertoppings => {
        sum += ordertoppings.price
      });
    }
    sums.textContent = sum
  }
  let createitem = function (item) {
    let boolean = true;
    pizzaFormToppingsResultsList.querySelectorAll('li').forEach(pizzaFormToppingsResultsListItem => {
      if (pizzaFormToppingsResultsListItem.textContent === item.name) {
        pizzaFormToppingsResultsListItem.remove();
        boolean = false;
      }
    });
    if (boolean) {
      let pizzaFormToppingsResultItem = document.createElement('li');
      pizzaFormToppingsResultItem.classList.add('pizza-form__toppings-results-item');
      pizzaFormToppingsResultItem.textContent = item.name
      pizzaFormToppingsResultsList.appendChild(pizzaFormToppingsResultItem);
    }
  }
  