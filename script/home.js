let elements = {
  header: document.querySelector("header"),
  mobileHamMenuIcon: document.querySelector(".btnToggleMobileHamMenu"),
  wrapper: document.querySelector(".wrapper"),
  mobileMenu: document.querySelector(".mobile-menu"),
  closeMobileMenu: document.getElementById("btnCloseMobileMenu"),
  productsBTN: document.querySelector(".productsBTN"),
  productSubMenu: document.querySelector(".productSubMenu"),
};

window.addEventListener("scroll", (e) => {
  // console.log(e)
  // console.log(getComputedStyle(elements.header).height)
  // console.log((elements.header).scrollTop)
  // console.log("p",window.scrollX)
  // console.log(window.scrollY);
  // console.log(scroll.pageXOffset);

  if (window.scrollY > 10) {
    elements.header.classList.add("sticky");
  } else {
    elements.header.classList.remove("sticky");
  }
});

elements.mobileHamMenuIcon.addEventListener("click", (e) => {
  if (window.scrollY < 10) {
    elements.wrapper.style.trnasform = "scale(1)";
  } else {
    elements.wrapper.style.trnasform = "scale(0)";
  }

  elements.mobileMenu.classList.toggle("showMenuMobile");
});

elements.closeMobileMenu.addEventListener("click", () => {
  elements.mobileMenu.classList.remove("showMenuMobile");
  elements.wrapper.style.trnasform = "scale(0)";
});

elements.productsBTN.addEventListener("click", () => {
  elements.productSubMenu.classList.toggle("showSubMenu");
});

document
  .querySelector(".go-down>.icon-down-open")
  .addEventListener("click", () => {
    window.scrollTo({ top: 720, behavior: "smooth" });
  });