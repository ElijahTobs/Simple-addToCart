import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://realtime-sample-2-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value
  
  push(shoppingListInDB, inputValue)
  
  clearInputFieldEl()

  // appendToShoppingListEl(inputValue)
})

function clearInputFieldEl(){
  inputFieldEl.value = ""
}

function appendToShoppingListEl(value){
  shoppingListEl.innerHTML += `<li>${value}</li>`
}

function clearShoppingListEl(){
  shoppingListEl.innerHTML = ""
}

onValue(shoppingListInDB, function(snapshot){
  let shoppingListArray = Object.entries(snapshot.val())

  clearShoppingListEl()

  for (let x in shoppingListArray){
    let currentItemID = shoppingListArray[x][0]
    let currentItemValue = shoppingListArray[x][1]


    appendToShoppingListEl(currentItemValue)

  }
})