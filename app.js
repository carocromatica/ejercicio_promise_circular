function animateElement(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.left = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.left = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve();
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve();  
            }
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}


function animateElementTop(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.top = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.top = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}



// Somos las programadoras de la promise
//====================== Promise =====================
// Somos las programadoras usuarias de la promise

const allImg = document.getElementsByTagName("img");
/*animateElement(allImg[0], -200, 500, 3000).then(()=>{
    console.log("Terminó la animación de doge");
    return animateElement(allImg[1], -200, 500, 3500);
}).catch(()=>{

});
console.log("holi soy codigo despues de la promesa")*/

Promise.all([
    animateElement(allImg[0], 0, 500, 3000),
    animateElement(allImg[1], 0, 500, 3500)
]).then(()=>{
 
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElementTop(allImg[0], 0,500, 3000),
        animateElementTop(allImg[1], 0,500, 3500)
    ]);
}).then(()=>{
   
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElement(allImg[0], 500, 0, 3000),
        animateElement(allImg[1], 500, 0, 3500)
      ]);
}).then(()=>{
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElementTop(allImg[0], 500, 0, 3000),
        animateElementTop(allImg[1], 500, 0, 3500)
    ]);

  
}).catch(()=>{

});