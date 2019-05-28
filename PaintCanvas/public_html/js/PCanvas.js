 
 var  canvas = document.getElementById('canvas');
 var context = canvas.getContext('2d');
 context.lineWidth=10;
 var con = false;
 
 function dibujar(e) {
     x = e.clientX-canvas.offsetLeft;
     y = e.clientY-canvas.offsetTop;
     
     if(con==true)
     {
         context.lineTo(x,y);
         context.stroke();
     }
    
}
canvas.addEventListener('mousemove',dibujar);
canvas.addEventListener('mousedown',function () {
    con=true;
    context.beginPath();
    context.moveTo(x,y);
    canvas.addEventListener('mousemove',dibujar);
});

canvas.addEventListener('mouseup', function () {
    con= false;
});

function Color(valor) {
    context.strokeStyle=valor.value;
}

function Linea(valor) {
    
    context.lineWidth = valor.value;
}

function Limpiar() {
    context.clearRect(0,0, canvas.width, canvas.height);
}
