function bigger(){
    document.getElementById("input").style.fontSize = "24pt";
}
function moo(){
    var textInput = document.getElementById("input").value;
    textInput = textInput.toUpperCase();
    var parts = textInput.split(".");
    textInput = parts.join("-Moo."); //the assignment says to make it uppercase first and then add "Moo", so Moo includes the lowercase.
    textInput = document.getElementById("input").value = textInput;
}
function fanciBore(){
    let radio1 = document.getElementById('fancify');
    let radio2 = document.getElementById('bore');

    if (radio1.checked){
        document.getElementById("input").style.fontWeight = "bold";
        document.getElementById("input").style.color = "blue";
        document.getElementById("input").style.textDecoration = "underline";
    }
    if (radio2.checked){
        document.getElementById("input").style.fontWeight = "normal";
        document.getElementById("input").style.color = "black";
        document.getElementById("input").style.textDecoration = "none";
    }

}