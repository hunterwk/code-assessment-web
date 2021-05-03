$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200',
        dataType: 'json'
    }).then(function (response) {
        // work with response data here
        console.log(response);
        for (var i=0; i < 6; i++){
            var a = i+1
            var address = response.address[i]
            var city = response.city[i]
            var state = response.state[i]
            var postal_code = response.postal_code[i]
            var completeAddress = city + ", " + state + " " + postal_code
            //var phone
            //var hourString

            var cardId = "card-" + a
            var cardBodyId = "cardBodyId" + a
            $("#CardCol").append("<div class='card shadow-sm m-3' id=" + cardId + "></div>")
            var card = $("#" + cardId)
            card.append("<div class='card-body' id=" + cardBodyId + "></div>")
            var cardBody = $("#" + cardBodyId)
            cardBody.append("<h5 class='card-title float-left'>Taco Truck "+ a +"</h5>")
            //cardBody.append("<span class='float-right'>"+ distance away +"</span>")
            cardBody.append("<br><br>")
            cardBody.append("<address><span>"+ address +"</span><br><span>"+ completeAddress + "</span></address>")
            cardBody.append("<span class='hoursOpen'>" + hourString +"</span>")
            cardBody.append("<br><br>")
            cardBody.append("<img src='./assets/phone-icon.png' alt='phone icon'><span class='phoneNum'>"+ phone +"</span><br><br> ")
            cardBody.append("<div class='d-flex'><a href='#' class='btn btn-dark card-link flex-fill' target='_blank'>DIRECTIONS</a><a href='#' class='btn btn-dark card-link flex-fill'>MORE INFO</a></div>")

        }
    });

    // DEMO
    $('.map').attr('src', 'https://maps.googleapis.com/maps/api/staticmap?center=32.823943,-117.150259&zoom=13&scale=2&size=200x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff0000%7Clabel:1%7C32.823943,-117.150259')
});

