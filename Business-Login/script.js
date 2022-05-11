document.querySelector('#business').addEventListener('click', businessPage)
document.querySelector('#developer').addEventListener('click', developerPage)

/*
these functions change the background color of the pages to blue for business, 
red for developer upon clicking the business or developer tabs.
*/

function developerPage() {
  document.querySelector('#developer').style.backgroundColor = 'lightblue'
  document.querySelector('#business').style.backgroundColor = 'white'
  document.querySelector('section').style.backgroundColor = 'red'
}

function businessPage() {
  document.querySelector('#developer').style.backgroundColor = 'white'
  document.querySelector('#business').style.backgroundColor = 'lightblue'
  document.querySelector('section').style.backgroundColor = '#134A8E'
}
