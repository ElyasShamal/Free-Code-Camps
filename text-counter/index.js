

let textbox = document.getElementById("textbox");

let Count = document.getElementById("Count");


function updateCount(){
    Count.innerHTML = textbox.value.length;
}



textbox.oninput = updateCount;