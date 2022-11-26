//create active link in sidebar

// Add active class to the current button (highlight it)

var sidebar = document.getElementById("sid");
var btns = sidebar.getElementsByClassName("sid-icon-button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-nav");
        current[0].className = current[0].className.replace(" active-nav", "");
        this.className += " active-nav";
    });
}
