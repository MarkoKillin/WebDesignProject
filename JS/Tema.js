function jednostrukiKlik(){
    var pozadinaDiva=document.getElementById("vrh");
    pozadinaDiva.style.setProperty("background-color", "rgba(0, 0, 0, 0.2)");
}

function dupliKlik(){
    var pozadinaDiva=document.getElementById("vrh");
    pozadinaDiva.style.setProperty("background-color", "rgba(0, 0, 0, 0)");
}

function teme(){
    var teme=document.getElementsByClassName("teme");
    teme[0].addEventListener('click', promeniTemu);
    teme[1].addEventListener('click', promeniTemu);
    teme[2].addEventListener('click', promeniTemu);
    teme[3].addEventListener('click', promeniTemu);
}

function promeniTemu(){
    resetuj();
    this.className="selektovan";
    let color=this.getAttribute('data-color');
    document.documentElement.style.setProperty("--color", color);
}

function resetuj(){
    var teme=document.getElementsByClassName("selektovan");
    for(var i=0; i<teme.length; i++){
        teme[i].className="teme";
    }
}