function reloadHomePage() {
  location.reload(true); // It Will Reload The Web Page
}
function scrollToTop() {
  // Scroll to the top smoothly(Quick Link)
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

// Footer Animation
// Text Animation
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// IT Will Scroll To Top(Smooth)

document.addEventListener("DOMContentLoaded", function () {
  var backToTopLink = document.getElementById("back-to-top-link");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopLink.style.display = "block";
    } else {
      backToTopLink.style.display = "none";
    }
  });

  backToTopLink.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// JS For About Section Mobile Screen 
document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.mainImg');

  images.forEach(function (image) {
      image.addEventListener('click', function () {
          this.classList.toggle('clicked');
      });
  });
});
