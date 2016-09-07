(function() {
    var b = document.documentElement;
    var a = document.createElement("style");
    a.innerHTML = "html { font-size: " + ((b.clientWidth > 640 ? 640 : b.clientWidth) / 18.75) + "px !important; }";
    b.firstElementChild.appendChild(a)
})();
