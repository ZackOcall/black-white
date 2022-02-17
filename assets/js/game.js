document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                alert(`Pick a tile!`)
            }
        });
    }
});

function chooseTile() {
    if ($(this).hasClass("0")) {
        computerTurn();
    } else if ($(this).hasClass("1")) {
        computerTurn();
    } else if ($(this).hasClass("2")) {
        computerTurn();
    } else if ($(this).hasClass("3")) {
        computerTurn();
    } else if ($(this).hasClass("4")) {
        computerTurn();
    } else if ($(this).hasClass("5")) {
        computerTurn();
    } else if ($(this).hasClass("6")) {
        computerTurn();
    } else if ($(this).hasClass("7")) {
        computerTurn();
    } else if ($(this).hasClass("8")) {
        computerTurn();
    }
}