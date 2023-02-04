let showBtn = document.getElementsByClassName("show-more")[0];
let allAcademic = document.getElementsByClassName("all-academic")[0];

showBtn.addEventListener("click", () => {
    // allAcademic.style.transition="1s";
    allAcademic.classList.toggle("show");
})