function inicijalizacijaProvera(){

    var unosImena=document.getElementById("name");
    unosImena.oninvalid=pogresnoIme;
    unosImena.oninput=pogresnoIme;

    var unosLozinke=document.getElementById("password");
    unosLozinke.oninvalid=pogresnaLozinka;
    unosLozinke.oninput=pogresnaLozinka;

    var unosPBroja=document.getElementById("postanskibroj");
    unosPBroja.oninvalid=pogresanPostanskiBroj;
    unosPBroja.oninput=pogresanPostanskiBroj;

    var unosDatuma=document.getElementById("date");
    unosDatuma.oninvalid=pogresanDatum;
    unosDatuma.oninput=pogresanDatum;
}

//pojedinacne funkcije za ispitivanje tacnosti forme
function pogresnoIme(){
    this.setCustomValidity("");
    if(this.validity.valueMissing)
        this.setCustomValidity("Potrebno je da unesete ime i prezime.");
    else if(this.validity.patternMismatch)
        this.setCustomValidity("Mora se sastojati iz najmanje dve reci(imena i prezimena).");
}

function pogresnaLozinka(){
    this.setCustomValidity("");
    if(this.validity.valueMissing)
        this.setCustomValidity("Potrebno je da unesete lozinku.");
    else if(this.validity.patternMismatch)
        this.setCustomValidity("Lozinka mora da sadrzi bar jedno malo, bar jedno veliko i bar jedan broj, i minimalna duzina lozinke je 8 karaktera.");
}

function pogresanPostanskiBroj(){
    this.setCustomValidity("");
    if(this.validity.valueMissing)
        this.setCustomValidity("Potrebno je uneti postanski broj.");
    else if(this.validity.patternMismatch)
        this.setCustomValidity("Mora biti petocifren broj.");
}

function pogresanDatum(){
    this.setCustomValidity("");
    if(this.validity.valueMissing)
        this.setCustomValidity("Potrebno je uneti datum rodjenja.");
}
//ispitivanje validnosti mail adrese
function validnostMaila(){
    var prviDeo=false;   //deo pre @
    var znak=false;      //znak @
    var drugiDeo=false;  //deo izmedju @ i .
    var tacka=false;     //znak .
    var treciDeo=false;  //deo posle .
    var specijalni=true; //ovu promenljivu koristim za specijalne slucajeve npr. abc--abc@abc.com
    var pozicijaEt;
    var brojTacaka=0;

    var mail=document.getElementById("email").value;

    if((mail.charAt(0)>='A' && mail.charAt(0)<='Z') || (mail.charAt(0)>='a' && mail.charAt(0)<='z') || (mail.charAt(0)>='0' && mail.charAt(0)<='9'))
        prviDeo=true;  //mail mora poceti slovom ili brojem tako da proveravamo da li je prvi karakter slovo ili broj
    for(var i=0; i<mail.length; i++){
        if(mail.charAt(i)=='@' && i!=0){
            pozicijaEt=i;
            znak=true;
         } //trazenje pozicije @ jer treba proveriti elemente oko njega

        if(!((mail.charAt(i)>='A' && mail.charAt(i)<='Z') || (mail.charAt(i)>='a' && mail.charAt(i)<='z') || (mail.charAt(i)>='0' && mail.charAt(i)<='9')))
            if(!((mail.charAt(i+1)>='A' && mail.charAt(i+1)<='Z') || (mail.charAt(i+1)>='a' && mail.charAt(i+1)<='z') || (mail.charAt(i+1)>='0' && mail.charAt(i+1)<='9')))
                specijalni=false; //ne sme biti dva uzastopna specijalna simbola
    }
    if((mail.charAt(pozicijaEt+1)>='A' && mail.charAt(pozicijaEt+1)<='Z') || (mail.charAt(pozicijaEt+1)>='a' && mail.charAt(pozicijaEt+1)<='z') || (mail.charAt(pozicijaEt+1)>='0' && mail.charAt(pozicijaEt+1)<='9'))
        drugiDeo=true; //provera da li postoji drugi deo mail adrese
    for(var i=pozicijaEt; i<mail.length; i++){
        if(mail.charAt(i)=='.'){
            tacka=true;
            brojTacaka++;
        }
        if(brojTacaka>=2)
            specijalni=false;
        if((mail.charAt(i+1)>='A' && mail.charAt(i+1)<='Z') || (mail.charAt(i+1)>='a' && mail.charAt(i+1)<='z') || (mail.charAt(i+1)>='0' && mail.charAt(i+1)<='9'))
            if((mail.charAt(i+2)>='A' && mail.charAt(i+2)<='Z') || (mail.charAt(i+2)>='a' && mail.charAt(i+2)<='z') || (mail.charAt(i+2)>='0' && mail.charAt(i+2)<='9'))
                treciDeo=true; //provera da li ima bar 2 karaktera iza tacke
    }
    return prviDeo && znak && drugiDeo && tacka && treciDeo && specijalni;
}

function validnostAdrese(){
    var prvoSlovo=false;
    var prviBroj=false;
    var brojUlice=false;
    var nemaBrojUlice=false;
    var znakovi=true;
    var specijalni2=true;

    var adr=document.getElementById("adress").value;
    var reci=adr.split(" ");  //pravimo niz reci

    if((adr.charAt(0)>='A' && adr.charAt(0)<='Z') || (adr.charAt(0)>='a' && adr.charAt(0)<='z'))
        prvoSlovo=true;  //provera da li je prvi karakter slovo
    else if(adr.charAt(0)>='0' && adr.charAt(0)<='9')
        prviBroj=true;  //provera da li je prvi karakter broj
    
    for(var i=0; i<adr.length; i++){
        if(!((adr.charAt(i)>='A' && adr.charAt(i)<='Z') || (adr.charAt(i)>='a' && adr.charAt(i)<='z') || (adr.charAt(i)>='0' && adr.charAt(i)<='9') || adr.charAt(i)==' ' || adr.charAt(i)=='/'))
            znakovi=false;  //provera da li u adresi postoje nedozvoljeni simboli
    }

    if(reci.length<2)
        specijalni2=false; //adresa mora imati bar dva podstringa

    if(reci[reci.length-1]=="BB" || reci[reci.length-1]=="bb")
        nemaBrojUlice=true; //provera da li ima bb
    
    var poslednjiString=reci[reci.length-1];
    for(var i=0; i<poslednjiString.length; i++){
        if(poslednjiString.charAt(i)>='0' && poslednjiString.charAt(i)<='9')
            brojUlice=true; //provera da li ima broj na kraju
    }
    return (prvoSlovo || prviBroj) && (brojUlice || nemaBrojUlice) && znakovi && specijalni2;
}

//funkcija koja ce pozvati proveru maila i adrese
function provera(){
    if(validnostMaila()==false){
        alert("Unet je neispravan mail.");
        return false;
    }
    if(validnostAdrese()==false){
        alert("Uneta je neispravna adresa.");
        return false;
    }
    return true;
}
