import "./styles.css";

// Select and cache the <main> element in a variable named mainEl.
let mainEL = document.querySelector(`main`);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEL.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEL.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEL.classList.add(`flex-ctr`);

//Part 2
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

//Part 3:
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// Set the height of the subMenuEl element to be 100%.
subMenuEl.style.height = `100%`;

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add a class of flex-around to subMenuEl.
subMenuEl.classList.add(`flex-around`);

// Add a class of flex-ctr to subMenuEl.
// subMenuEl.classList.add(`flex-ctr`);

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;
//Part 4:
// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll(`a`);

//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, (event) => {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches(`a`)) {
    return;
  }
  //Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);
  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it
  if (event.target.classList.contains(`active`)) {
    event.target.classList.remove(`active`);
  } else {
    event.target.classList.add(`active`);
  }

  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%
  if (event.target.textContent === "about") {
    subMenuEl.style.top = "0";
  } else {
    subMenuEl.style.top = "100%";
  }
  //The event listener should remove the active class from all other <a> elements in topMenuLinks - whether the active class exists or not.
  // topMenuLinks.forEach((link) => {
  //   if (link.classList.contains(`active`)) {
  //     link.classList.remove(`active`);
  //   } else {
  //     link.classList.add(`active`);
  //   }
  // });
  // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

  // if (event.target.classList.contains(`active`)) {
  //   subMenuEl.style.top === `0`;
  //   event.target.classList.remove(`active`);
  // } else {
  //   event.target.classList.add(`active`);
  //   subMenuEl.style.top = `100%`;
  //   // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%
  //   // Otherwise, set the CSS top property of subMenuEl to 0.
  // }
  // if (event.target.textContent === `about`) {
  //   subMenuEl.style.top = `0`;
  // }
  //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  // topMenuLinks.forEach((link) => {
  //   if (link.classList.contains(`active`)) {
  //     link.classList.remove(`active`);
  //   }
  // });
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%
  // if (event.target.textContent === `about`) {
  //   subMenuEl.style.top = `0`;
  // }
  // Otherwise, set the CSS top property of subMenuEl to 0.
  // else {
  //   subMenuEl.style.top = `100%`;
  // }
});

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  let menuItem = document.createElement(`a`);
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  menuItem.setAttribute(`href`, link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  menuItem.textContent = link.text;

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(menuItem);
});
