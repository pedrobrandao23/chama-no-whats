function mandaZap (elemento) {

    let message = elemento.firstElementChild.innerText;
    let numero = prompt("Para qual número? (com ddd, somente números)");
    let link = `https://api.whatsapp.com/send?phone=55${numero}&text=${message}`;


    if(isNaN(numero) || numero.length != 11) {
        alert ("Insira um número válido")
    } else {
        window.open(link);
    };        
}

