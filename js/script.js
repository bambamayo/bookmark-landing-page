/****Show and Hide Features Tab *****/
let tabNavigations = document.querySelectorAll(".features__tab__nav-btn");
let tabItems = document.querySelectorAll(".features__tab__item");

tabNavigations.forEach(nav =>
  nav.addEventListener("click", e => {
    tabNavigations.forEach(nav => {
      nav.className = "features__tab__nav-btn";
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
      if (child.localName === "img") {
        child.classList.toggle("faq__list-item-img--mod-image");
      }
    });
  });
});
