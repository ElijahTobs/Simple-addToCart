import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
  if (inputValue){
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()
  }
})

function clearInputFieldEl(){
  inputFieldEl.value = ""
}

function clearShoppingListEl(){
  shoppingListEl.innerHTML = ""
}


onValue(shoppingListInDB, function(snapshot){
  if (snapshot.exists()){
    let shoppingListArray = Object.entries(snapshot.val())
    clearShoppingListEl()

    for (let x in shoppingListArray){
      let currentItem = shoppingListArray[x]
      // let currentItemID = currentItem[0]
      // let currentItemValue = currentItem[1]

      appendToShoppingListEl(currentItem)
    }
  } else {
    shoppingListEl.innerHTML = "No items here... yet"
  }

})

function appendToShoppingListEl(itemArr){
  let itemID = itemArr[0]
  let itemValue = itemArr[1]

  const newEl = document.createElement("li")
  newEl.textContent = itemValue

  newEl.addEventListener("click", ()=>{
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
    remove(exactLocationOfItemInDB)
  })

  shoppingListEl.append(newEl)
  // shoppingListEl.innerHTML += `<li>${value}</li>`
}