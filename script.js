function exibir(id, btn){
    document.getElementById(id).style.display = 'block';
    document.getElementById(btn).style.display = 'block';
}

function aceitou(){
    window.alert("Alexandre Boyago é o paraninfo do 3° ETIM")
}

function desviar(t){
    btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = posicao(10, 90);
    btn.style.left = posicao(10, 90);
}

function posicao(min, max){
    return (Math.random() * (max - min) + min) + '%';
}