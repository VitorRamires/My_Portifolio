const elementosAnimados = document.querySelectorAll('.anime')
const windowHeight = window.innerHeight * 0.63
elementosAnimados[0].classList.add('animeAtivo')

function animePage(){
  elementosAnimados.forEach(elemento=>{
    const elementoDistancia = elemento.getBoundingClientRect().top
    if(elementoDistancia < windowHeight){
      elemento.classList.add('animeAtivo')
    }
  })
}

window.addEventListener('scroll', animePage)