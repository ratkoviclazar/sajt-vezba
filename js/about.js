const firstElement = document.querySelector(".faq1-par");
const secondElement = document.querySelector(".faq2-par");
const thirdElement = document.querySelector(".faq3-par");
const fourthElement = document.querySelector(".faq4-par");

const btn1 = document.querySelector("#faq-btn1");
const btn2 = document.querySelector("#faq-btn2");
const btn3 = document.querySelector("#faq-btn3");
const btn4 = document.querySelector("#faq-btn4");

btn1.addEventListener("click", function () {
  if (firstElement.style.display === "block") {
    firstElement.style.display = "none";
  } else {
    firstElement.style.display = "block";
  }
});

btn2.addEventListener("click", function () {
  if (secondElement.style.display === "block") {
    secondElement.style.display = "none";
  } else {
    secondElement.style.display = "block";
  }
});

btn3.addEventListener("click", function () {
  if (thirdElement.style.display === "block") {
    thirdElement.style.display = "none";
  } else {
    thirdElement.style.display = "block";
  }
});

btn4.addEventListener("click", function () {
  if (fourthElement.style.display === "block") {
    fourthElement.style.display = "none";
  } else {
    fourthElement.style.display = "block";
  }
});
