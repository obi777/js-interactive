function footer() {
  let number = 1
  let foot = document.getElementsByTagName("footer")[0]
  foot.addEventListener("click", function () {
      console.log("clique numero " + number)
    number+= 1 // number++
    })
}
footer()

function navBar() {
  let collapse = document.getElementById("navbarHeader")
  let menu = document.getElementsByClassName("navbar-toggler-icon")[0]
  menu.addEventListener("click" , function() {
    collapse.classList.toggle("collapse")
  })
}
navBar()
function editRouge(){
  let btn = document.getElementsByClassName("btn-outline-secondary")[0]
  let text = document.querySelectorAll("div.card")[0]
  btn.addEventListener("click", function(){
    text.style.color="red"
  })
}
editRouge()


function editvert(){
  let btn = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary')
  let div = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div')
  btn.addEventListener("click", function () {
  div.classList.toggle("text-success")
})
}
editvert()

// async function nucelar() {
//   // let collapse = document.getElementById("navbarHeader")
//   let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div')
//   let cdn  =   document.querySelector('head > link')
//   // let head =   document.querySelector('head')[0]

//   nav.addEventListener("dblclick" , function () {
//     cdn.disabled= true
//   })

// }
// nucelar()


 function nucelar() {
  // let collapse = document.getElementById("navbarHeader")
  let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div')
  let cdn  =   document.querySelector('head > link')

  nav.addEventListener("dblclick", function(){
    document.querySelector("link").disabled == true ? document.querySelector("link").disabled = false : document.querySelector("link").disabled = true ;
    });

}
nucelar()

function hoverEffect(){
  let btn   =    document.querySelectorAll('button.btn.btn-sm.btn-success')
  let para  =    document.querySelectorAll('body > main > div > div > div > div > div > div > p')
  let image =    document.querySelectorAll('body > main > div > div > div > div > div > img')
  let status = false

    for (let i = 0; i < btn.length; i++) {
      let button = btn[i]
        button.addEventListener("mouseover", function () {
      if (status == false) {
        image[i].style.width='20%'
        para[i].style.visibility='hidden'
        status = true
      }else if(status == true){
    
        para[i].style.visibility='visible'
        image[i].style.width='100%'
        status = false
      }//else
        })//event
}
}

hoverEffect()

function wtfBro() {
  let btn = document.querySelector('body > main > section > div > p > a.btn.btn-secondary.my-2')
  let doc = document.querySelector('body > main > div > div > div > div:nth-child(6)')
  let docMove = document.querySelector('body > main > div > div > div > div:nth-child(1)')
  let parent = doc.parentNode
  btn.addEventListener("click", function () {
    parent.insertBefore(docMove, null)
    parent.insertBefore(doc, parent.firstChild)
  })

}
wtfBro()

function firstToLast() {
  let btn = document.querySelector('body > main > section > div > p > a.btn.btn-primary.my-2')
  let docMove = document.querySelector('body > main > div > div > div > div:nth-child(6)')
  let doc = document.querySelector('body > main > div > div > div > div:nth-child(1)')
  let parent = doc.parentNode
  btn.addEventListener("click", function (event) {
  event.preventDefault() 
    parent.insertBefore(docMove, null)
    parent.insertBefore(doc, parent.firstChild)
})

}
firstToLast()
// 
// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

function key() {
  let div = document.querySelector('body > main > div > div > div')
  
  document.addEventListener('keydown', (e) => {
    if (e.isComposing || e.keyCode===90) {//z
      console.log("eeeee")
      div.classList.toggle("col-md-4")
    }
    if (e.isComposing || e.keyCode===65) {
      div.classList.toggle()
    }
  
  })
}

key()