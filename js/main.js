var hambooger_btn = document.getElementById("hambooger");
var hambooger_text = document.getElementById("hambooger_text");
var navi = document.getElementById("navi");
var closeBtn = document.getElementById("closeBtn");
var menu_items = document.getElementById("menu-items");

function showNavi(){
    navi.style.display = "block";
    hambooger_btn.classList.add("hide");
    menu_items.style.display = "inline";
}

function hideNavi(){
    navi.style.display = "none";
    hambooger_btn.classList.remove("hide");
    menu_items.style.display = "none";
}