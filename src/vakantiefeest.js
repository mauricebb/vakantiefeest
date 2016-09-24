/**
 * Created by gerbuiker on 20-9-2016.
 */
function toInfo(){
    window.location = "Info.html";
}

function toHome(){
    window.location = "home.html"
}

function showSlides() {
    var i;
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showModal() {
// Get the modal
    var modal = document.getElementById('Modal');
    var form = document.forms["hotelBoeking"];
    modal.style.display = "block";

// Get the button that opens the modal
    var btn = document.getElementsByClassName("modalButton");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        form.reset();
        document.getElementById('totalPrice').innerHTML = "Totale Prijs: €0";
        modal.style.display = "none";
    }
}


function getHotelRoomPrice(){
    var form = document.forms["hotelBoeking"];
    var hotel_prices = new Array();
    hotel_prices["cheap"]=30;
    hotel_prices["standard"]=75;
    hotel_prices["luxe"]=100;
    var price=0;
    var selectedRoom = form.elements["selectedhotel"];
    for(var i = 0; i < selectedRoom.length; i++){
        if(selectedRoom[i]. checked){
            price = hotel_prices[selectedRoom[i].value];
            break;
        }
    }
    return price;
}

function getPersonen(){
    var aantal_personen = new Array();
    aantal_personen["1"] = 1;
    aantal_personen["2"] = 2;
    aantal_personen["3"] = 3;
    aantal_personen["4"] = 4;
    aantal_personen["5"] = 5;
    aantal_personen["6"] = 6;
    aantal_personen["7"] = 7;
    aantal_personen["8"] = 8;
    aantal_personen["9"] = 9;
    aantal_personen["10"] = 10;
    var personen = 0;
    var form = document.forms["hotelBoeking"];
    var selectedPersonen = form.elements["aantalPersonen"];
    personen = aantal_personen[selectedPersonen.value];
    return personen;
}

function welkomPakket() {
    var welkomPakket=0;
    var form = document.forms["hotelBoeking"];
    var pakket = form.elements["welkompakket"];
    if(pakket.checked==true){
       welkomPakket=30;
    }

    return welkomPakket;
}

function getTotal() {
    var totalPrice = (getHotelRoomPrice() * getPersonen()) + welkomPakket();
    document.getElementById('totalPrice').innerHTML = "Totale Prijs: €" + totalPrice;
}

