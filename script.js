var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

$(document).ready(function () {
    $("#flip_1").click(function () {
        $("#panel_1").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_2").click(function () {
        $("#panel_2").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_3").click(function () {
        $("#panel_3").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_4").click(function () {
        $("#panel_4").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_5").click(function () {
        $("#panel_5").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_6").click(function () {
        $("#panel_6").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_7").click(function () {
        $("#panel_7").slideToggle("slow");
    });
});
$(document).ready(function () {
    $("#flip_8").click(function () {
        $("#panel_8").slideToggle("slow");
    });
});
>