import { addEventListenerToArray, removeActiveClass, addActiveClass } from './moduleFunctions'

function createHeader() {
    const header = {} 

    header.this = document.querySelector('.header')
    header.menu = document.querySelector('.header-menu')
    header.anchors = document.querySelectorAll('.header-anchor')    

    header.setHeader = (event) => {
        header.setAnchors(event.currentTarget)
        header.setHeight()
        header.scrollTop()
    }

    header.setAnchors = (currentTarget) => {
        removeActiveClass(header.anchors, 'header-anchor-active')
        addActiveClass(currentTarget, 'header-anchor-active')
    }   
    
    header.setHeight = () => {     
        header.this.classList.contains('header-active') ? header.this.classList.remove('header-active') : header.this.classList.add('header-active')
    }

    header.scrollTop = () => setTimeout(() => {        
        window.innerWidth < 601 ? document.querySelector('.content').scrollTop -= 70 : false
    }, 100)

    addEventListenerToArray(header.anchors, 'click', header.setHeader)
    
    header.menu.addEventListener('click', header.setHeight) 

    return header 
}

export { createHeader }