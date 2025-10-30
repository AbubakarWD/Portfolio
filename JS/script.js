{
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }
}
const scrollContainer = document.querySelector(".project-grid");

let scrollAmount = 0;
const scrollStep = 320; // card width + gap
const intervalTime = 3000; // 3 seconds

setInterval(() => {
  if (
    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
    scrollContainer.scrollWidth
  ) {
    scrollAmount = 0;
  } else {
    scrollAmount += scrollStep;
  }
  scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, intervalTime);
