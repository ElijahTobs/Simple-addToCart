const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


addButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value

  clearInputFieldEl()
  appendToShoppingListEl(inputValue)
})

function clearInputFieldEl(){
  inputFieldEl.value = ""
}

function appendToShoppingListEl(value){
  shoppingListEl.innerHTML += `<li>${value}</li>`
}