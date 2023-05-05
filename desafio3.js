function onKeyDownHandler(event) {

    var codigo = event.which || event.keyCode;

    console.log("Presionada: " + codigo);
     
    if(codigo === 13){
      console.log("Tecla ENTER");
    }

    if(codigo >= 65 && codigo <= 90){
      console.log(String.fromCharCode(codigo));
    }

     
}
function getCodigo(){
    if(document.getElementById('imagenCodigo')){
        document.getElementById("imagenCodigo").remove();
    }
    var codigo = document.getElementById('codigoDeBarras').value;
    var url = 'https://barcode.tec-it.com/barcode.ashx?data='+codigo+'&code=EAN13&translate-esc=on';
    var image = new Image();
    image.src = url;
    image.id= "imagenCodigo";
    document.getElementById('container').appendChild(image);
    
}

