var visible = [false, false, false, false];

$(document).ready(function () {

    $(".menu_button.btn0").click(function () {
        $(".panel.orange").slideToggle("medium");
        visible[0] = !visible[0];
        if (visible[0]) {
            visible[2] = false;
            visible[1] = false;
            visible[3] = false;
        }
        $(".panel.green").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.turquese").fadeOut("fast");
        hide_show_welcome_message()
    });

    $(".menu_button.btn1").click(function () {
        $(".panel.green").slideToggle("medium");
        visible[1] = !visible[1];
        if (visible[1]) {
            visible[0] = false;
            visible[2] = false;
            visible[3] = false;
        }
        $(".panel.turquese").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });

    $(".menu_button.btn2").click(function () {
        $(".panel.turquese").slideToggle("medium");
        visible[2] = !visible[2];
        if (visible[2]) {
            visible[0] = false;
            visible[1] = false;
            visible[3] = false;
        }
        $(".panel.green").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });

    $(".menu_button.btn3").click(function () {
        $(".panel.red").slideToggle("medium");
        toggle_visibility(3);
        $(".panel.green").fadeOut("fast");
        $(".panel.turquese").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });

});

function toggle_visibility(i) {
    visible[i] = !visible[i];
    if (visible[i]) {
        for (j = 0; j < 4 && j!=i; j++) {
            visible[j] = false;
        }
    }
}

function hide_show_welcome_message() {
    var show = true;
    for (i = 0; i < visible.length; i++) {
        if (visible[i]) {
            show = !show;
            break;
        }
    }
    //console.log(visible);
    //console.log(show);
    if (show) {
        $("#landing").show();
        $("#bottom-image").fadeIn();
    } else {
        $("#landing").hide();
        $("#bottom-image").fadeOut();
    }
}

// book js
var active = false;
var day = '';

$('.menu_button.day').click(function (e) {
    day = $(this).text();
    if (day.indexOf("Mon") !== -1) {
        $("#card0").attr("src", "/images/pasta-pesto.jpg");
        $("#card0-title").text("Pasta with pesto");
        $("#card0-text").text("Amazing pasta with fresh pesto with basil and parmesan");
    }
    if (day.indexOf("Tue") !== -1) {
        $("#card0").attr("src", "/images/pasta-al-sugo.jpg");
        $("#card0-title").text("Pasta al sugo");
        $("#card0-text").text("Simple and plain pasta with sugo from datterini tomatoes");
    }
    //console.log(day);
    $('.menu_button.day').not(this).removeClass('active');
    $(this).toggleClass('active');
    if ($(this).hasClass("active")) {
        active = true;
    } else {
        active = false;
    }
    if (!active) {
        $("#day_pick").show();
        $(".container").hide();
    } else {
        $("#day_pick").hide();
        $(".container").fadeIn();
    }
    e.preventDefault();
});

$('.container').on('click', function () {
    $(".card", this).toggleClass('flipped');
});
