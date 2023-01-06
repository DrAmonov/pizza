let InputSize = 25
let AddButton = document.getElementById('add')
let Circles = document.querySelectorAll('.pizza_size__circle')

let InputName = document.getElementById('inputName')
let InputPhone = document.getElementById('inputPhone')
let InputWeight = document.getElementById('inputWeight')
let InputAddress = document.getElementById('inputAddress')
let InputIngredients = document.querySelectorAll('.input_checkbox')
let InputAddition = document.querySelectorAll('.input_checkbox_addition')
let totalresult = document.querySelector('.js-result')


let ResultName = document.getElementById('name')
let ResultPhone = document.getElementById('phone')
let ResultAddress = document.getElementById('address')
let ResultWeight = document.getElementById('weight')
let ResultSize = document.getElementById('size')
let ResultIngredents = document.getElementById('ingredients')
let ResultAdditions = document.getElementById('additions')

function myFunction(element, size) {
   Circles.forEach(circle => {
      circle.classList.remove('active')
   })
   element.classList.add('active')

   InputSize = size
}

AddButton.addEventListener('click', (e) => {
   e.preventDefault()


   // console.log(InputName.value);
   // console.log(InputPhone.value);
   // console.log(InputAddress.value);
   // console.log(InputWeight.value);
   // console.log(InputIngredients);
   // console.log(InputAddition);

   let Addition = []
   let Ingredients = []
   InputIngredients.forEach(item => {
      if(item.checked) {
         Ingredients.push(item.nextElementSibling.innerHTML)
      }
   })

   InputAddition.forEach(item => {
      if(item.checked) {
         Addition.push(item.nextElementSibling.innerHTML)
      }
   })


   ResultName.innerHTML = InputName.value
   ResultPhone.innerHTML = InputPhone.value
   ResultAddress.innerHTML = InputAddress.value
   ResultWeight.innerHTML = InputWeight.value
   ResultSize.innerHTML = InputSize
   ResultIngredents.innerHTML = Ingredients
   ResultAdditions.innerHTML = Addition

   Addition = []
   Ingredients = []
   InputName.value = ''
   InputPhone.value = ''
   InputAddress.value = ''
   InputWeight.value = 'Kichik'

   Circles.forEach(circle => {
      circle.classList.remove('active')
   })
   Circles[0].classList.add('active')

   InputAddition.forEach(item => {
      if(item.checked) {
         item.checked = false
      }
   })

   InputIngredients.forEach(item => {
      if(item.checked) {
         item.checked = false
      }
   })

  totalresult.textContent = Math.floor((Math.random()* 10) + 5)*5;
   
})