/****Show and Hide Features Tab *****/
let tabNavigations = document.querySelectorAll(".features__tab__nav-btn");
let tabItems = document.querySelectorAll(".features__tab__item");

tabNavigations.forEach(nav =>
  nav.addEventListener("click", e => {
    tabNavigations.forEach(nav => {
      nav.className = "features__tab__nav-btn";
      nav.lastElementChild.className = "features__tab__nav-btn-span";
    });

    tabItems.forEach(tab => {
      if (e.currentTarget.title === tab.getAttribute("id")) {
        tab.className = "features__tab__item ";
      } else {
        tab.className = "features__tab__item features__tab__item--hide";
      }
    });

    e.currentTarget.className =
      "features__tab__nav-btn features__tab__nav-btn--active";

    e.currentTarget.lastElementChild.className =
      "features__tab__nav-btn-span features__tab__nav-btn-span--show";
  })
);

/******* Show and hide faq tabs */
let faqListItems = document.querySelectorAll(".faq__list-item");
faqListItems.forEach(item => {
  item.addEventListener("click", () => {
    let childrenArray = Array.from(item.children);
    childrenArray.forEach(child => {
      if (child.localName === "p") {
        child.classList.toggle("faq__list-item-text--show-text");
      }
      if (child.localName === "svg") {
        child.classList.toggle("faq__list-item-img--mod-image");
      }
    });
  });
});

/******* Form error validation *******/
let contactForm = document.querySelector(".contact__form");
let contactInput = document.querySelector(".contact__form-input");
let contactInputContainer = document.querySelector(
  ".contact__form__input-container"
);
let errorMsg = document.querySelector(".contact__form-error-text");
let errorIcon = document.querySelector(".contact__form-error-icon");

contactInput.addEventListener(
  "input",
  e => {
    if (contactInput.validity.valid) {
      errorMsg.className = "contact__form-error-text";
      errorIcon.style.display = "none";
      contactInputContainer.className = "contact__form__input-container";
    }
  },
  false
);

contactForm.addEventListener(
  "submit",
  e => {
    if (!contactInput.validity.valid || contactInput.value === "") {
      errorMsg.className =
        "contact__form-error-text contact__form-error-text--active";
      errorIcon.style.display = "block";

      contactInputContainer.className =
        "contact__form__input-container contact__form__input-container--error";

      //Prevent form from submitting
      e.preventDefault();
    }
  },
  false
);

/********** NAVIGATION OPENING AND CLOSING ON SMALL SCREENS  **********/
let header = document.querySelector(".header");
let headerNavList = document.querySelector(".header__nav__list");
let openNavIcon = document.querySelector(".header__nav-icon-open");
let closeNavIcon = document.querySelector(".header__nav-icon-close");
let logoPathImage = document.querySelector(".change-fill");

openNavIcon.addEventListener("click", e => {
  header.className = "header phone-header";
  headerNavList.className = "header__nav__list header__nav__list-sm";
  logoPathImage.style.fill = "#ffffff";
  openNavIcon.classList.add("hide");
  closeNavIcon.classList.remove("hide");
});

closeNavIcon.addEventListener("click", e => {
  header.className = "header";
  headerNavList.className = "header__nav__list";
  logoPathImage.style.fill = "#242A45";
  openNavIcon.classList.remove("hide");
  closeNavIcon.classList.add("hide");
});
