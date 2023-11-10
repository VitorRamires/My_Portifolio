
const hamburguer = document.querySelector(".hamburguer")
const menuMobile = document.querySelector(".menu-mob-body")
const hamburguerLines = document.querySelectorAll(".hamburguer span")





function handleShowMenu(){
  if(menuMobile.classList.contains('showMenu')){
    menuMobile.classList.remove('showMenu')
    hamburguerLines.forEach((line) =>{
      line.classList.remove('activeMenu')
    })

  } else {
    menuMobile.classList.add('showMenu')
    hamburguerLines.forEach((line) =>{
      line.classList.add('activeMenu')
    })
  }
}

hamburguer.addEventListener('click', handleShowMenu)