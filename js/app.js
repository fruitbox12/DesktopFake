function data(){ 
    var data = document.getElementById('data');
    var now = new Date
    data.textContent =  (`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`)
    }

function log(message){
    console.log('> ' + message)
}

const appConsole = document.querySelectorAll('.console')
const appBrowser = document.querySelectorAll('.browser')

appConsole.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

appBrowser.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

function dragstart(){
    dropzone.forEach(dropzone => dropzone.classList.add('highlight'))
    // this é o card nessa situacao

    this.classList.add('is-dragging')

}
function drag(){
    
}
function dragend(){
    dropzone.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')

}

const dropzone = document.querySelectorAll('.dropzone')

dropzone.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragdrop', dragdrop)
})

function dragenter(){
}

function dragover(){
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
    
}

function dragleave(){
    this.classList.remove('over')
   
}

function dragdrop(){

}

// console open

function openConsole(){

}


function toggleConsole(){
    
    const actionConsole = document.querySelectorAll('.console')
    
    actionConsole.forEach(e => {
        e.classList.toggle('consolef')
        e.style.animation='toggle 0.2s linear'
    })
    
    var space = document.getElementById('screen-action')
    for (let i = 0; i < actionConsole.length; i++){
        // space.innerHTML += "<div class='consolef'></div>"
    }
}

function toggleBrowser(){
    const actionConsole = document.querySelectorAll('.browser')
    actionConsole.forEach(e => {
        e.classList.toggle('browserf')
        e.style.animation='toggle 0.2s linear'
    })
}