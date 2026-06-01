function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4) {
                img.setAttribute('src','img/baby-boy.png')
                //bebe
            } else if (idade >=4 && idade < 11) {
                img.setAttribute('src', 'img/boy.png')
                //criança homem
            } else if (idade >= 11 && idade < 18) {
                img.setAttribute('src', 'img/adolecenteH.png')
                //adolecente homem
            }
            else if (idade < 25) {
                img.setAttribute('src','img/young-man.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src','img/man.png')
                //adulto
            } else {
                img.setAttribute('src','img/old-man.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','img/baby-girl.png')
                //crianca
            } else if (idade < 25) {
                img.setAttribute('src','img/young-lady.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src','img/woman.png')
                //adulto
            } else {
                img.setAttribute('src','img/old-woman.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


