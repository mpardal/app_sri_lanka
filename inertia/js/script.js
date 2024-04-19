const dropdownBtn = document.getElementById('btn')
const dropdownMenu = document.getElementById('dropdown')
const toggleArrow = document.getElementById('arrow')

/*const toggleDropdown = function () {
  dropdownMenu.classList.toggle('show')
  toggleArrow.classList.toggle('arrow')
}*/

dropdownBtn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('toto')
})

/*document.documentElement.addEventListener('click', function () {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown()
    console.log('tata')
  }
})*/
