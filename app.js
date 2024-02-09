const Year = document.querySelector('.date')


const newYear = new Date().getFullYear()

Year.innerHTML = newYear


const mailForm = document.querySelector('.mailForm')
const Subscribemail = document.querySelector('.Subscribemail')
const buttonAddon = document.getElementById('button-addon2')

mailForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const NewsubMail = Subscribemail.value
     
 if (NewsubMail === '' || null) {
  Subscribemail.style.border = '2px solid red'
  Subscribemail.classList.add('show')
  
 } else {
  Subscribemail.style.border = 'none'
  Subscribemail.classList.remove('show')

 }
 // empty form if submitted
 Subscribemail.value = ''
 })

