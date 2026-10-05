/* =====================================
   MOUSE GLOW
===================================== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", function (event) {

  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";

});


/* =====================================
   SCROLL REVEAL
===================================== */

const observer = new IntersectionObserver(

  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.15
  }

);


document
  .querySelectorAll(".reveal")
  .forEach(function (element) {

    observer.observe(element);

  });


/* =====================================
   MEMORY BUTTON
===================================== */

const memoryBtn =
  document.getElementById("memoryBtn");

const memoryResponse =
  document.getElementById("memoryResponse");

let memoryClicked = false;


memoryBtn.addEventListener("click", function () {

  memoryClicked = !memoryClicked;


  if (memoryClicked) {

    memoryBtn.textContent = "I'M NOT SURE";

    memoryResponse.textContent =
      "Good. Doubt is not failure. It is the beginning of observation.";

  }

  else {

    memoryBtn.textContent = "I REMEMBER";

    memoryResponse.textContent =
      "That's the strange thing about memory: certainty can feel exactly like truth.";

  }

});


/* =====================================
   CHOICE TEST
===================================== */

const choiceCards =
  document.querySelectorAll(".choice-card");

const choiceResult =
  document.getElementById("choiceResult");


choiceCards.forEach(function (card) {

  card.addEventListener("click", function () {

    /* Remove previous selection */

    choiceCards.forEach(function (item) {

      item.classList.remove("selected");

    });


    /* Select clicked card */

    card.classList.add("selected");


    /* Display result */

    if (card.dataset.choice === "A") {

      choiceResult.textContent =
        "Interesting. You chose a story.";

    }

    else {

      choiceResult.textContent =
        "Interesting. You chose evidence.";

    }


    /* Add second sentence */

    setTimeout(function () {

      choiceResult.textContent +=
        " Neither one is perfect.";

    }, 1100);

  });

});


/* =====================================
   FINAL BUTTON
===================================== */

const finalBtn =
  document.getElementById("finalBtn");

const finalMessage =
  document.getElementById("finalMessage");


finalBtn.addEventListener("click", function () {

  finalBtn.textContent = "YOU DID";


  finalMessage.textContent =
    "And that was your choice. Unless it wasn't. Either way, thank you for questioning it.";


  finalBtn.style.pointerEvents = "none";

});


/* =====================================
   SMOOTH SCROLL
===================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );


      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });