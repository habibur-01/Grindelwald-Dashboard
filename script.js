let showNav = false;

function toggleNav() {
  showNav = !showNav;
  const navbar = document.querySelector(".navbar");
  if (showNav) {
    navbar.classList.add("navbar-show");
  } else {
    navbar.classList.remove("navbar-show");
  }
  console.log("Navbar is now " + (showNav ? "visible" : "hidden"));
}
