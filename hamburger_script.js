var icons = document.querySelectorAll(".plus-detail-checkbox");
var boxes = document.getElementsByClassName("detail-vypujcky-container");

let len;
if (icons.length != boxes.length) {
    console.log("Number of checkboxes isn't equal to number of vypujcky-containers");
}
else{
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
}