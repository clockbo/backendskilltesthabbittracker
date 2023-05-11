const formOpenBtn = document.querySelector("#form-open"), formCloseBtn = document.querySelector(".form_close"), home = document.querySelector(".home");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));