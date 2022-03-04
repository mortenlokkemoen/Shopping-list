



//SELECTORS FOR OUR PAGE
//Our welcome button selector
//******** THIS IS FOR THE HAVE ALREADY LIST (FIST ROW) **********/
// SELECTORS
const HaveContainer = document.querySelector(".have-already-form-container");
const form = document.querySelector(".have-already-form");
const alert = document.querySelector(".have-already-alert");
const submitBtn = document.querySelector(".have-already-submit-btn");
const list = document.querySelector(".have-already-list");
const clearBtn = document.querySelector(".have-already-clear-btn");

// edit option
let listArray = [];
let editElement;
let editFlag = false;
// ****** event listeners **********
// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// ****** functions **********
function welcomeMsg() {
  displayAlert("Hey and welcome! You can add and delete items to this cart if needed! You can even edit them!");
}
// add item Already have //
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  if (value !== "" && !editFlag) {
    
    const element = document.createElement("article");
    element.classList.add("have-already-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

         
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // Push to array
    listArray.push(value);
    // display alert
    displayAlert("item added to the list", "success");
    // set back to default
    backToDefaultHave();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    backToDefaultHave();
  } else {
    displayAlert("please enter value", "danger");
  }
}


// Shows alert, then after 2000ms removes it
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
// clears out the item list
function clearItems() {
  const items = document.querySelectorAll(".have-already-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  displayAlert("empty list", "danger");
  backToDefaultHave();
}

// Whenc clicking the deletebutton removes a single list row of the item
function deleteItem(e) {
  const userConfirm = prompt("Do you want to delete item from the list? yes / No").toLowerCase();
  if (userConfirm == "yes") {{
  listArray.splice(e,1)
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  displayAlert("Uten successfully removed", "success");
}
} else 
  displayAlert("item delete cancelled", "danger");
  backToDefaultHave();
}

// edit function for selecting the right element in the html injection and changes it
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  //
  submitBtn.textContent = "edit";
}

// resets back to default
function backToDefaultHave() {
  grocery.value = "";
  editFlag = false;
  submitBtn.textContent = "submit";
}
// Creates the List item and appends it to list element.
function createListItem(value) {
  const element = document.createElement("article");
  element.classList.add("have-already-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(element);
  backToDefaultHave();
}


//******* SECOND BOX THINGS I NEED MORE OF *************// 
// SELECTORS
const outOfContainer = document.querySelector(".running-out-of-form-container");
const outOfForm = document.querySelector(".running-out-of-form");
const outOfAlert = document.querySelector(".running-out-of-alert");
const outOfSubmitBtn = document.querySelector(".running-out-of-submit-btn");
const outOfList = document.querySelector(".running-out-of-list");
const outOfClearBtn = document.querySelector(".running-out-of-clear-btn");

// edit option
let outOfArray = [];
let outOfEditElement;
let outOfEditFlag = false;
// ****** event listeners **********
// submit form
outOfForm.addEventListener("submit", outOfItem);
// clear list
outOfClearBtn.addEventListener("click", clearOutOfItems);
// ****** functions **********

// add item Already have //
function outOfItem(e) {
  e.preventDefault();
  const outOfValue = outofgrocery.value;
  if (outOfValue !== "" && !outOfEditFlag) {
    const outOfValueElement = document.createElement("out-of-article");
    outOfValueElement.classList.add("out-of-item");
    outOfValueElement.innerHTML = `<p class="title">${outOfValue}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

          
    // add event listeners to both buttons;
    const deleteBtn = outOfValueElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", outOfDeleteItem);
    const editBtn = outOfValueElement.querySelector(".edit-btn");
    editBtn.addEventListener("click", outOfEditItem);

    // append child
      outOfList.appendChild(outOfValueElement);
    // push to array
     outOfArray.push(outOfValue);
  // display alert
    displayOutOfAlert("item added to the list", "success");
    // set back to default
    outOfDefault();
  } else if (outOfValue !== "" && outOfEditFlag) {
    element.innerHTML = outOfValue;
    displayOutOfAlert("value changed", "success");
    outOfDefault();
  } else {
    displayOutOfAlert("please enter value", "danger");
  }
}


// Same alert function ,just 1 sec instead of 2 sec
function displayOutOfAlert(text, action) {
  outOfAlert.textContent = text;
  outOfAlert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    outOfAlert.textContent = "";
    outOfAlert.classList.remove(`alert-${action}`);
  }, 1000);
}

// deletes the whole list
function clearOutOfItems() {
  const items = document.querySelectorAll(".out-of-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      outOfList.removeChild(item);
    });
  }
  displayOutOfAlert("empty list", "danger");
  outOfDefault();
}

// Deletes just one item in the row
function outOfDeleteItem(e) {
  const userConfirm = prompt("Do you want to delete item from the list? yes / No").toLowerCase();
  if (userConfirm == "yes") {{
    outOfArray.splice(e, 1);
    const element = e.currentTarget.parentElement.parentElement;
    outOfList.removeChild(element);
    displayOutOfAlert("Item successfully removed", "success");
    outOfDefault();
  }
  }else 
    displayOutOfAlert("item deletion cancelled", "danger");
    outOfDefault();
}
// edits the item
function outOfEditItem(e) {
  outOfValueElement = e.currentTarget.parentElement.parentElement;
  // set edit item
  element = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  outofgrocery.value = element.innerHTML;
  outOfEditFlag = true;
  //
  outOfSubmitBtn.textContent = "edit";
}
// clears the input fields, and make everything default
function outOfDefault() {
  outofgrocery.value = "";
  outOfEditFlag = false;
  outOfSubmitBtn.textContent = "submit";
}

function createListItem(outOfValue) {
  const outOfElement = document.createElement("article");
  outOfElement.classList.add("out-of-item");
  outOfElement.innerHTML = `<p class="title">${outOfValue}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = outOfValueElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", outOfDeleteItem);
  const editBtn = outOfValueElement.querySelector(".edit-btn");
  editBtn.addEventListener("click", outOfEditItem);
  
  // append child
  outOfList.appendChild(outOfValueElement);
  outOfDefault();
}


//******* SHOPPING LIST CODE (THIRD BOX)*************//
// SELECTORS
const shopContainer = document.querySelector(".shopping-list-container");
const shopForm = document.querySelector(".shopping-list-form");
const shopAlert = document.querySelector(".shopping-list-alert");
const shopSubmitBtn = document.querySelector(".shopping-list-submit-btn");
const shopList = document.querySelector(".shopping-list");
const shopClearBtn = document.querySelector(".shopping-list-clear-btn");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");


//Edit options
let shopArray = [];
let shopEditElement;
let shopEditFlag = false;
// ****** event listeners **********

// submit form
shopForm.addEventListener("submit", shopItem);
// clear list
shopClearBtn.addEventListener("click", clearShopItems);
// ****** functions **********
let total = 0;
// add item Already have
function shopItem(e) {
  e.preventDefault();
  const shopValue = shoppingitems.value;
  const quantityValue = parseInt(quantity.value);
    const priceValue = parseInt(price.value);
  if (shopValue !== "" && !shopEditFlag && !quantityValue <= 0 && !priceValue <= 0) {
    
    total = total + priceValue * quantityValue;
    document.getElementById("totalValue").innerHTML = total;
    const shopEditElement = document.createElement("out-of-article");
    shopEditElement.classList.add("shopping-list-item");
    shopEditElement.innerHTML = `<p class="title">${shopValue}</p>
            <p class="quantity-title">${quantityValue}</p>
            <p class="price-title">${priceValue}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = shopEditElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", shopDeleteItem);
    const editBtn = shopEditElement.querySelector(".edit-btn");
    editBtn.addEventListener("click", shopEditItem);

    shopList.appendChild(shopEditElement);
    shopArray.push(shopValue);
    displayShopAlert("item added to the list", "success");
    shoppingBackToDefault();
  } else
    displayShopAlert("please enter a valid value!", "danger");
    shoppingBackToDefault();
  }
function displayShopAlert(text, action) {
  shopAlert.textContent = text;
  shopAlert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    shopAlert.textContent = "";
    shopAlert.classList.remove(`alert-${action}`);
  }, 1000);
}


function clearShopItems() {
  const items = document.querySelectorAll(".shopping-list-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      shopList.removeChild(item);
    });
  }
  displayShopAlert("empty list", "danger");
  shoppingBackToDefault();
  clearTotalValue();
}


function shopDeleteItem(e) {
  const userConfirm = prompt("Do you want to delete item from the list? yes / No").toLowerCase();
  if (userConfirm == "yes") {{
    shopArray.splice(e, 1);
    const element = e.currentTarget.parentElement.parentElement;
    shopList.removeChild(element);
    displayShopAlert("Item successfully removed", "success");
    const quantityValue = parseInt(quantity.value);
    const priceValue = parseInt(price.value);
     total = total - priceValue * quantityValue;
     document.getElementById("totalValue").innerHTML = total;
    shoppingBackToDefault();
  }
} else 
  displayShopAlert("item deletion cancelled", "danger");
  shoppingBackToDefault();
}


function shopEditItem(e) {
  shopListElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  shoppingitems.value = shopListElement.previousElementSibling.previousElementSibling.innerHTML;
  shopEditFlag = true;
  //
  shopSubmitBtn.textContent = "edit";
}


function shoppingBackToDefault() {
  shoppingitems.value = "";
  shopEditFlag = false;
  shopSubmitBtn.textContent = "submit";
  document.getElementById("quantity").innerText = 1;
}


function clearTotalValue() {
  document.getElementById("totalValue").innerText = 0;
  total = 0;
}


function createListItem(shopValue) {
  const shopElement = document.createElement("article");
  shopElement.classList.add("shoppingitems");
  shopElement.innerHTML = `<p class="title">${shopValue}</p>
                          <p class="quantity-title">${quantityValue}</p>
                      <p class="price-title">${priceValue}</p
                      <div class="btn-container">
                      <!-- edit btn -->
                      <button type="button" class="edit-btn">
                      <i class="fas fa-edit"></i>
                      </button>
                       <!-- delete btn -->
                      <button type="button" class="delete-btn">
                      <i class="fas fa-trash"></i>
                      </button>
  </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = shopListElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", shopDeleteItem);
  const editBtn = shopListElement.querySelector(".edit-btn");
  editBtn.addEventListener("click", shopEditItem);
  // append child
  shopList.appendChild(shopListElement);
  shoppingBackToDefault();
}
