function removeActiveClass(array, className) {    
    array.forEach(element => element.classList.remove(className))
}

function addActiveClass(element, className) {
    element.classList.add(className)
} 

function addEventListenerToArray(array, event, callBackFunction) {
    array.forEach(element => element.addEventListener(event, callBackFunction))
}
 
export { 
    addEventListenerToArray,
    removeActiveClass,
    addActiveClass,    
}