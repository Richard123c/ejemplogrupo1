function validar() {
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPass").value;
    
    if(usuarioIngresado=="Ricardo" && passwordIngresado=="123456"){
    alert("Bienvenidos, sus datos son correctos");
    window.open("https://www.youtube.com/");
    }
    else
    {
    alert("no son correctos sus datos ");
    window.open("index.html")
    }
    }