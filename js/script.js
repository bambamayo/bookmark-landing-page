let tabNavigation = document.querySelectorAll(".features__tab__nav-btn");
let tabItem = document.querySelectorAll(".features__tab__item");

tabNavigation.forEach(nav =>
  nav.addEventListener("click", e => {
    tabNavigation.forEach(nav => {
      nav.className = "features__tab__nav-btn";
    });

    tabItem.forEach(tab => {
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
