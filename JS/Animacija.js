//animacija "ulaska" slike i iframea na stranicu prilikom scrolla

window.onscroll=animacija;

function animacija(){
    var i1=document.querySelector(".i1");
    var i2=document.querySelector(".i2");
    var i3=document.querySelector(".i3");
    var i4=document.querySelector(".i4");
    var i5=document.querySelector(".i5");
    var i6=document.querySelector(".i6");
    var i7=document.querySelector(".i7");
    var i8=document.querySelector(".i8");
    var i9=document.querySelector(".i9");    //deo gde selektujemo sve nase iframove (koristim queryselector umesto getElementsByClassName
    var i10=document.querySelector(".i10"); // da bih dobio pojedinacne elemente a ne kolekciju)

    var pozI1=i1.getBoundingClientRect().top;
    var pozI2=i2.getBoundingClientRect().top;
    var pozI3=i3.getBoundingClientRect().top;
    var pozI4=i4.getBoundingClientRect().top;
    var pozI5=i5.getBoundingClientRect().top;
    var pozI6=i6.getBoundingClientRect().top;
    var pozI7=i7.getBoundingClientRect().top;
    var pozI8=i8.getBoundingClientRect().top;
    var pozI9=i9.getBoundingClientRect().top; 
    var pozI10=i10.getBoundingClientRect().top;  //ovde trazimo gornju poziciju svih iframova da bi znali kada cemo zapoceti animaciju nad njima

    var pozicijaEkrana=window.innerHeight;

    if(pozI1<pozicijaEkrana){
        i1.setAttribute("id", "animacija");
    }
    if(pozI2<pozicijaEkrana){
        i2.setAttribute("id", "animacija");
    }
    if(pozI3<pozicijaEkrana){
        i3.setAttribute("id", "animacija");
    }
    if(pozI4<pozicijaEkrana){
        i4.setAttribute("id", "animacija");
    }
    if(pozI5<pozicijaEkrana){
        i5.setAttribute("id", "animacija");
    }
    if(pozI6<pozicijaEkrana){
        i6.setAttribute("id", "animacija");
    }
    if(pozI7<pozicijaEkrana){
        i7.setAttribute("id", "animacija");
    }
    if(pozI8<pozicijaEkrana){
        i8.setAttribute("id", "animacija");
    }
    if(pozI9<pozicijaEkrana){
        i9.setAttribute("id", "animacija");
    }
    if(pozI10<pozicijaEkrana){
        i10.setAttribute("id", "animacija");  //ovaj deo je samo provera da li je iframe usao u frame i ako jeste da zapocne animaciju.
    }

}