function carregar(){
    const msg = document.querySelector("div#msg");
    const img = document.querySelector("img#imagem");

        const data = new Date();
        const minute = data.getMinutes()
        const hora = data.getHours()

            if(hora >= 0 && hora < 12){
                msg.innerHTML = `Agora são ${hora}:${minute}<br> <strong>Bom dia!</strong>`;
                img.src = "img/manha.jpg";
                document.body.style.background = "rgb(114, 198, 114)";
            }else if(hora >= 12 && hora < 18){
                msg.innerHTML = `Agora são ${hora}:${minute}<br> <strong>Boa tarde!</strong>`;
                img.src = "img/tarde.jpg";
                document.body.style.background = "rgb(232, 206, 172)";
            }else {
                msg.innerHTML = `Agora são ${hora}:${minute}<br> <strong>Boa noite!</strong>`
                img.src = "img/noite.jpg";
                document.body.style.background = "rgb(12, 23, 72)";
            }
}
