function createTouchListener(callBackFunction) {
    const touchListener = {}

    touchListener.state = {
        observers: [
            diffTouchs,
            swipedTo,
            parseNegative,
            parseDirection,
            restart,
        ] 
    }     

    touchListener.startTouch = (event) => {
        touchListener.state.initialX = event.touches[0].clientX
        touchListener.state.initialY = event.touches[0].clientY
    }

    touchListener.moveTouch = (event) => {
        moveTouch(event)
        notifyAll(event)        
    }

    function moveTouch(event) {
        touchListener.state.currentX = event.touches[0].clientX
        touchListener.state.currentY = event.touches[0].clientY
    }

    function notifyAll(event) {
        touchListener.state.observers.forEach(callbackFunction => callbackFunction(event))
    }

    function diffTouchs() {
        touchListener.state.diffX = touchListener.state.initialX - touchListener.state.currentX
        touchListener.state.diffY = touchListener.state.initialY - touchListener.state.currentY
    }

    function swipedTo() {
        touchListener.state.swipedX = touchListener.state.diffX > 0 ? 'left' : 'right'
        touchListener.state.swipedY = touchListener.state.diffY > 0 ? 'top' : 'bottom'
    }

    function parseNegative() {
        touchListener.state.diffX = touchListener.state.diffX < 0 ? touchListener.state.diffX * -1 : touchListener.state.diffX
        touchListener.state.diffY = touchListener.state.diffY < 0 ? touchListener.state.diffY * -1 : touchListener.state.diffY
    }

    function parseDirection(event) {
        if(touchListener.state.diffX > touchListener.state.diffY) { 
            touchListener.state.swipedX === 'left' ? callBackFunction('left') : callBackFunction('right') }            
    }

    function restart() {
        touchListener.state.initialX = undefined
        touchListener.state.initialY = undefined 
    }

    return touchListener
}

export { createTouchListener }