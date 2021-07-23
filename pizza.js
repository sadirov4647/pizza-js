let pizzaSelect = document.querySelector('.pizza-select');
let sizeButtons = document.querySelectorAll('.size-button');
let breadType = document.querySelector('.bread-sort__choose');
let OnPizzaChecks = document.querySelectorAll('.onpizza-checks');
let againChecks = document.querySelectorAll('.again-check');
let pizzaSize = document.querySelector('.pizza-book__height-choose');
let OnPizzaLabel = document.querySelectorAll('.onpizza-label');
let bookPizzaList = document.querySelector('.onpizza_book-list');

pizzaSelect.onchange =  function addBreadType(){
    breadType.textContent = pizzaSelect.value;
}



for(let button of sizeButtons){
    button.addEventListener('click', function addPizzaSize(){
        pizzaSize.textContent = button.textContent;
    });
    
}



for(let oncheck of OnPizzaChecks){
    oncheck.addEventListener('click', function(){
        if(oncheck.checked){
            let bookPizzaItem = document.createElement('li');
            bookPizzaItem.textContent = oncheck.value;
           bookPizzaList.append(bookPizzaItem);
        }else{
            let pizzaBookItems = bookPizzaList.querySelectorAll('li');
            pizzaBookItems.forEach(bookPizzaItem => {
                if(bookPizzaItem.textContent === oncheck.value){
                    bookPizzaItem.remove();
                }
            });
        }
        
    })
}


for(let againCheck of againChecks){
    againCheck.addEventListener('click', function(){
        if(againCheck.checked){
            let bookAgainItem = document.createElement('li');
            bookAgainItem.textContent = againCheck.value;
           bookPizzaList.append(bookAgainItem);
        }else{
            let pizzaAgainItems = bookPizzaList.querySelectorAll('li');
            pizzaAgainItems.forEach(bookAgainItem => {
                if(bookAgainItem.textContent === againCheck.value){
                    bookAgainItem.remove();
                }
            });
        }
        
    })
}

// let makeElement = function(tagName){
//     let element = document.createElement(tagName);
//     element.classList.add(className);
//     if(text){
//         element.textContent = text;
//     }
//     return element;
// }

// let createListItem = function(){
//     let listItem = makeElement('li');
//     let title = makeElement('p');
//     listItem.appendChild(title);
//     return listItem;
// }