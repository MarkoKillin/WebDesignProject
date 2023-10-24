var polje;

function inicijalizuj(){
    polje=document.getElementById("deo2");
}

//funkcija koja prikuplja podatke iz forme, kreira objekat sa tim podacima i povezuje objekat sa funkcijom za brisanje samog objekta
function rezervisiKartu(){
    var element1=document.getElementById("grad");
    var grad=element1.options[element1.selectedIndex].value;
    var imeiprezime=document.getElementById("imeiprezime").value;
    var datum=document.getElementById("datum").value;
    var element2=document.getElementById("vrstakarte");
    var vrstakarte=element2.options[element2.selectedIndex].value;
    var karta=document.createElement("div");
    karta.setAttribute("class", "karta");
    if(vrstakarte.localeCompare("Regularna")==0)
        karta.setAttribute("id", "regularna");
    else if(vrstakarte.localeCompare("VIP")==0)
        karta.setAttribute("id", "vip");
    else if(vrstakarte.localeCompare("Pit")==0)
        karta.setAttribute("id", "pit");
    karta.innerHTML="<b>"+imeiprezime+" | "+grad+" | "+vrstakarte+" | "+datum+"</b>";
    karta.addEventListener('click', obrisiKartu);
    polje.appendChild(karta);
}

function obrisiKartu(event){
    if(event.ctrlKey)
        if(window.confirm("Da li zelite da obrisete kartu?")==true)
            polje.removeChild(this);
}

//provera za podatke koji se upisuju na kartu
function proveraKarte(){
    var im=document.getElementById("imeiprezime").value;
    var dt=document.getElementById("datum").value;

    if(im.length<6){
        alert("Unesite ime i prezime.(moraju biti duzi od 5 karaktera)");
        return false;
    }
    else if(dt===""){
        alert("Unesite datum.");
        return false;
    }
    else
        rezervisiKartu();
}