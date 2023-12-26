var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
    changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
    changeCount(-1);
});


document.querySelector("#increaseby2").addEventListener("click", () => {
    changeCount(2);
});

document.querySelector("#increaseby3").addEventListener("click", () => {
    changeCount(3);
});

changeCount = (number) => {
    count += number;
    document.querySelector("#count").textContent = count;
}