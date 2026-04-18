// ===== Step 4.1: Access Elements =====
let btn = document.getElementById("clickBtn");
let input = document.getElementById("textInput");
let select = document.getElementById("selectOption");
let form = document.getElementById("myForm");
let nameInput = document.getElementById("nameInput");
let output = document.getElementById("output");
let hoverBox = document.getElementById("hoverBox");


// ===== Step 4.2: Click Event =====
btn.addEventListener("click", function() {
    output.innerText = "Button clicked!";
});


// ===== Step 4.3: Input & Change Events =====
input.addEventListener("input", function() {
    output.innerText = "Typing: " + input.value;
});

select.addEventListener("change", function() {
    output.innerText = "Selected: " + select.value;
});


// ===== Step 4.4: Submit Event =====
form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.innerText = "Form submitted: " + nameInput.value;
});


// ===== Step 4.5: Keyup Event =====
input.addEventListener("keyup", function(event) {
    output.innerText = "Last key: " + event.key;
});


// ===== Step 4.6: Mouse Events =====
hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "lightgreen";
    output.innerText = "Mouse over box";
});

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "lightgray";
    output.innerText = "Mouse left box";
});


// ===== Step 4.7: Focus & Blur =====
input.addEventListener("focus", function() {
    input.style.backgroundColor = "#e0f7ff";
});

input.addEventListener("blur", function() {
    input.style.backgroundColor = "white";
});