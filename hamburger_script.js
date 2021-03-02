var icons = document.querySelectorAll(".plus-detail-checkbox");
var boxes = document.getElementsByClassName("detail-vypujcky-container");

// plus-detail-checkbox detail-vypujcky-container
//var icons = document.getElementsByClassName("plus-detail-checkbox");
//var boxes = document.getElementsByClassName("detail-vypujcky-container");

for (let i = 0; i < icons.length; i++) {
    let input = icons[i].querySelector("input");
    input.onclick = () => {
        if (input.checked) {;
            boxes[i].style.height = boxes[i].scrollHeight+"px";
        }
        else{
            boxes[i].style.height = "0px";
        }
    };
}