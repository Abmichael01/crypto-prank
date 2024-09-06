const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");

const page2Trigger = document.querySelector(".page2Trigger");
const page4Trigger = document.querySelector(".page4Trigger");

function navigateToPage(page) {
  if (page === 1) {
    page1.style.display = "flex";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
  } else if (page === 2) {
    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
  } else if (page === 3) {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "flex";
    page4.style.display = "none";
    page5.style.display = "none";
  } else if (page === 4) {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "flex";
    page5.style.display = "none";
  } else if (page === 5) {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "flex";
  }
}

page2Trigger.addEventListener("click", () => {
  navigateToPage(2);
  setTimeout(() => {
    navigateToPage(3);
  }, 5000);
});

page4Trigger.addEventListener("click", () => {
  navigateToPage(4);
  setTimeout(() => {
    navigateToPage(5);
    var audio = document.getElementById("audio");
    audio.play();
  }, 5000);
});
