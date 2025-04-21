const header = document.querySelector(".header");

const headerHeight = header.offsetHeight; //요소의 총 높이
console.log(headerHeight); //f12 키로 보니까 74 나옴

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY > headerHeight");
    header.classList.add("header--dark"); //css에 있는 걸 찾아옴
  } else {
    // console.log("window.scrollY < headerHeight");
    header.classList.remove("header--dark"); //css에 있는 걸 찾아옴
  }
});
//scrollY : 위아래로 움직이는 값 scrollX = 가로로 움직이는 값
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowup = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowup.style.opacity = 1;
  } else {
    arrowup.style.opacity = 0;
  }
});

//arrowup을 클릭했을 때 부드럽게 위로 올라가게 하고 싶다.
arrowup.addEventListener("click", (e) => {
  e.preventDefault(); //a태그의 기본 동작을 막음
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 햄버거 메뉴 적용
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
