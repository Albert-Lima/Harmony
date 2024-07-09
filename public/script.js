var bttToCursos = document.querySelector("#bttToCursos")
var bttToContato = document.querySelector("#bttToContato")
var bttScrollDown = document.querySelector(".scrollDown")

var SectionCursos = document.querySelector(".linksClass")
var SectionContato = document.querySelector(".topFooter")
var SectionScrollDown = document.querySelector(".CTACurso")


bttToCursos.addEventListener("click", ()=>{
    let elementoRect1 = SectionCursos.getBoundingClientRect()
    let centerY = elementoRect1.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})

bttToContato.addEventListener("click", ()=>{
    let elementoRect2 = SectionContato.getBoundingClientRect()
    let centerY = elementoRect2.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})

bttScrollDown.addEventListener("click", ()=>{
    let elementoRect3 = SectionScrollDown.getBoundingClientRect()
    let centerY = elementoRect3.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})