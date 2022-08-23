const boutonHome = document.querySelector('.boutonHome')
const bouton1 = document.querySelector('.bouton1')
const bouton2 = document.querySelector('.bouton2')
const bouton3 = document.querySelector('.bouton3')
const bouton4 = document.querySelector('.bouton4')
const bouton5 = document.querySelector('.bouton5')

/* side = [X, Y, Z] */
const right = [0, 264, 0]
const left = [0, 84, 0]
const topo = [270, 0, -6]
const bottom = [90, 0, 6]
const front = [0, -6, 0]
const back = [0, 174, 0]

const cube = document.querySelector('#cube')

function resetScale(){
    cube.className = ''
    console.log('fin du settimeout')
}

function changeFace(bouton, side){
    bouton.addEventListener('click', () =>{
        cube.style.transform = `rotateX(${side[0]-6}deg) rotateY(${side[1]}deg) rotateZ(${side[2]}deg)`
        cube.className ='spin'
        console.log('début du settimeout')

        setTimeout(resetScale, 1500);
    })
    
    
}


changeFace(bouton2, right)
changeFace(bouton3, left)
changeFace(boutonHome, front)
changeFace(bouton5, bottom)
changeFace(bouton4, topo)
changeFace(bouton1, back)
