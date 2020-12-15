import { addEventListenerToArray, removeActiveClass, addActiveClass } from './moduleFunctions'
import { createTouchListener } from './moduleCreateTouchListener'

function createSection(sectionName) {
    const section = {}
    
    section.this = document.getElementById(`${sectionName}`)
    section.previews = document.querySelectorAll(`.preview-${sectionName}`)
    section.images = document.querySelectorAll(`.image-${sectionName}`)
    section.texts = document.querySelectorAll(`.text-${sectionName}`)    
    section.bull = document.querySelectorAll(`.bull-${sectionName}`)
    section.button = document.querySelector(`.button-${sectionName}`)

    section.state = { 
        index: {
            currentIndex: 0,
            lastIndex: section.previews.length,
        },

        observers: [
            setContainer,
            setPreviews,
            setImages,
            setTexts,
            setBull,
        ]
    }    

    section.notify = (index) => {
        section.state.observers.forEach(callBackFunction => callBackFunction(index))
    }

    function setContainer() {
        setTimeout(() => {
            section.this.classList.contains('container-reverse') ? section.this.classList.remove('container-reverse') : section.this.classList.add('container-reverse')
        }, 750)
    }
    
    function setPreviews(index) {
        removeActiveClass(section.previews, 'item-active')
        addActiveClass(section.previews[index], 'item-active')     
    }
    
    function setImages(index) {           
        section.images.forEach(image => image.style.transform = `translateX(-${index}00%)`)
        window.innerWidth > 600 ? transition(section.images) : false
    } 

    function setTexts(index) {
        section.texts.forEach(text => text.style.transform = `translateX(-${index}00%)`)
        window.innerWidth > 600 ? transition(section.texts) : false
    }    

    function setBull(index) {
        setTimeout(() => {
            removeActiveClass(section.bull, 'bull-active')
            addActiveClass(section.bull[index], 'bull-active')     
        }, 500)
    }

    function transition(array) {
        array[0].parentElement.style.opacity = '0'
        setTimeout(() => array[0].parentElement.style.opacity = '1', 1500)
    }
    
    section.eventListener = (event) => {
        section.state.index.currentIndex = Array.prototype.indexOf.call(section.previews, event.currentTarget)
        section.notify(section.state.index.currentIndex)
        clearInterval(section.timeListener)   
    } 

    section.setButton = () => {        
        section.button.classList.contains('button-active') ? section.button.classList.remove('button-active') : section.button.classList.add('button-active')
        section.button.classList.contains('button-active') ? addActiveClass(section.texts[section.state.index.currentIndex], 'text-active') : removeActiveClass(section.texts, 'text-active')
        clearInterval(section.timeListener)
    }

    section.timeListener = setInterval(() => {
        section.state.index.currentIndex + 1 < section.state.index.lastIndex ? section.state.index.currentIndex++ : section.state.index.currentIndex = 0 
        section.notify(section.state.index.currentIndex)   
    }, 14000)

    section.button.addEventListener('click', section.setButton)

    addEventListenerToArray(section.previews, 'click', section.eventListener)

    function callbacktoTouch(swiped) {
        normalize()
        swiped === 'left' ? increment() : decrement()
        section.notify(section.state.index.currentIndex)        
    }

    function increment () {
        section.state.index.currentIndex + 1 < section.state.index.lastIndex ? section.state.index.currentIndex++ : section.state.index.currentIndex = 0 
    }

    function decrement () {
        section.state.index.currentIndex - 1 < 0 ? section.state.index.currentIndex = (section.state.index.lastIndex - 1) : --section.state.index.currentIndex
    }

    function normalize() {
        section.button.classList.remove('button-active')
        removeActiveClass(section.texts, 'text-active')
        clearInterval(section.timeListener)  
    }

    const touchListener = createTouchListener(callbacktoTouch)

    section.this.addEventListener('touchstart', touchListener.startTouch)
    section.this.addEventListener('touchmove', touchListener.moveTouch)
    
    return section
}

export { createSection }