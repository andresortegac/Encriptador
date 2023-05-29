const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none";
    const notificaciones = document.querySelector('.notificaciones');
    notificaciones.style.display = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado =stringEncriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); 
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado
    textArea.value= "";
}

function desencriptar(stringDesncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesncriptado =stringDesncriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length;i++) {
        if(stringDesncriptado.includes(matrizCodigo[i][1])){
            stringDesncriptado = stringDesncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]); 
        }
    }
    return stringDesncriptado;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
}


