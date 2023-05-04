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

document.getElementById("form").addEventListener('submit', function(e) {
    console.log('hohoho');
    e.preventDefault();
    getCodigo();
});