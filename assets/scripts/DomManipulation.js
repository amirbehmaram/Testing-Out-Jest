class DomManipulation {
  constructor() {
    // Buttons
    this.importantBtn = document.querySelector(".importantBtn");
    this.secretBtn = document.querySelector(".secretBtn");

    // Figure Elements
    this.importantOtter = document.querySelector(".importantOtter");
    this.secretOtter = document.querySelector(".secretOtter");

    // Click Decision Elements
    this.decisionEle = document.querySelector(".decision");

    // Update the decision initally to our default value
    this.updateDecision();
  }

  addEvents() {
    if (this.importantBtn && this.importantOtter) {
      this.importantBtn.addEventListener("click", () => {
        this.importantOtter.classList.toggle("visible");
        this.updateDecision();
      });
    }

    if (this.secretBtn && this.secretOtter) {
      this.secretBtn.addEventListener("click", () => {
        this.secretOtter.classList.toggle("visible");
        this.updateDecision();
      });
    }
  }

  updateDecision() {
    if (this.decisionEle) {
      if ( this.importantOtter.classList.contains("visible") && this.secretOtter.classList.contains("visible")) {
        this.decisionEle.innerHTML = "What's wrong with you?! Why would you have both active at the same time?";
      } else if (this.secretOtter.classList.contains("visible")) {
        this.decisionEle.innerHTML = "Bad decision my dude, try again."
      } else if (this.importantOtter.classList.contains("visible")) {
        this.decisionEle.innerHTML = "Good choice, this is a good otter.";
      } else {
        this.decisionEle.innerHTML = "No buttons clicked.";
      }
    }
  }
}

module.exports = DomManipulation;
