var el = document.getElementById('anima');


function timer(el) {
    var el = document.getElementById('anima');
    var height = el.offsetHeight;
    var maxheight = "1000px";
    var newHeight = height + 1;
    el.style.height = newHeight + 'px';

    function f() {
        if (el.style.height !== maxheight) {
            window.setTimeout(timer, 40);

    }
        i();
    }
    function i() {
        var width = el.offsetWidth;
        var maxwidth = "1000px";
        var newWidth = width + 1;
        el.style.width = newWidth + 'px';
}

    f();

    console.log(newHeight);

}

timer(el);