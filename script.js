let count = 0;

document.getElementById("Increase").addEventListener("click", function() {
    count++;
    document.getElementById("count").textContent = count;
});

document.getElementById("Decrease").addEventListener("click", function() {
    count--;
    document.getElementById("count").textContent = count;
});
