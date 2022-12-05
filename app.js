var animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElementInWindow(element) {
    console.log(element);
     //1 Item
     var rect = element.getClientRects()[0]
     var heightScreen = window.innerHeight
     
     // Các trg hợp bên ngoài màn hình 
     // rect.bottom < 0 || rect.top > heightScreen
     if(!(rect.bottom < 0 || rect.top > heightScreen)){//Nếu ở trong 
         //Nếu khối đó ở bên trong
         element.classList.add('start')
     }else{
         //Nếu khối đó nằm bê ngoài
         element.classList.remove('start')
     }
}

function checkAnimation(){
    animationElements.forEach(element => {
        toggleAnimationElementInWindow(element)
    })
}



window.onscroll = checkAnimation
