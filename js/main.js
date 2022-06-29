window.addEventListener("load", function () {
  let toggle = document.querySelector(".toggle i");
  let menu_mobile = document.querySelector(".header__menu_mobile");
  let close = document.querySelector(".header__menu_mobile ul");
  console.log(close);
  toggle.addEventListener("click", function () {
    console.log("asad12");

    menu_mobile.classList.add("active");
  });
  close.addEventListener("click", function (e) {
    if (e.target.matches(".button-close-mobile i")) {
      menu_mobile.classList.remove("active");
    }
  });
});
