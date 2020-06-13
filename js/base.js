'use strict';
const query_string = window.location.search; //get query string from url
const args = new URLSearchParams(query_string);
function check_dark() {

    const hours = new Date().getHours();

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $(".navbar").removeClass("bg-primary").addClass("bg-dark");
        $("body").addClass("body_dark");
        $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
        return 'dark'
    }

    if (hours >= 20 || hours <= 4) {
        $(".navbar").removeClass("bg-primary").addClass("bg-dark");
        $("body").addClass("body_dark");
        $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
        return 'dark';
    }

    return 'default';
}

function toggle_style(style) { //use buttons to toggle dark mode on/off
    const tiles = $(".leaflet-tile-pane");
    if(style.toLowerCase() === "dark" ) {
        tiles.addClass("tile_dark");
    } else {
        tiles.removeClass("tile_dark");
    }
}

toggle_style((args.get("style") == null) ? check_dark() : args.get("style"));