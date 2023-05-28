import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
const appSettings = {
  databaseURl: "https://realtime-database-97858-default-rtdb.firebaseio.com/"
}



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