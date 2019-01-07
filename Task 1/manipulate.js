document.getElementById("button-right").addEventListener("click", function(){

    var text = document.getElementById("being-manipulated");
    text.innerHTML = "I'm right!!";
    document.getElementById("blank-space-placeholder").order = "1";
    text.style.order = "2";
    text.style.paddingRight = "0px";
    text.style.paddingLeft = "60px";
});

document.getElementById("button-left").addEventListener("click", function(){

    var text = document.getElementById("being-manipulated");
    text.innerHTML = "No, I'm right!!";
    document.getElementById("blank-space-placeholder").order = "2";
    text.style.order = "1";
    text.style.paddingRight = "60px";
    text.style.paddingLeft = "0px";
});