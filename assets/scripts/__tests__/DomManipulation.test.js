let DomManipulation = require("../DomManipulation");

// Our "simulated DOM"
let documentContent = `
<main>
  <header>
      <h1>This is my page</h1>
  </header>
  <figure>
      <img id="logo" src="/otter.b6dd368e.svg" alt="Cool Otter Logo">
      <figcaption>Here, have an otter.</figcaption>
  </figure>
  <section>
      <h2>Which button you've clicked</h2>
      <p class="decision">No buttons clicked.</p>
  </section>
  <section>
      <h2>Very Important Section</h2>
      <button class="importantBtn">Click Pls.</button>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, quam ac
          lacinia iaculis, purus lorem fringilla purus, non congue nisi velit et justo. Donec
          tincidunt, neque a auctor dignissim, leo sapien mattis felis, et dignissim sem diam
          sit amet augue. In hac habitasse platea dictumst. Curabitur ipsum urna, auctor eget
          nunc vitae, mattis dapibus justo. Sed at nisl ornare, ornare risus id, rutrum tellus.
          Aenean eget ante ac elit blandit condimentum. Phasellus lectus sapien, commodo in
          justo a, volutpat interdum nunc. Nam non pharetra nunc.
      </p>
      <figure class="importantOtter">
          <img class="otterImg" src="https://pbs.twimg.com/media/D3lJ-xCWsAIZ7jV.jpg" alt="Otter leaning on a rock looking very contemplative about life">
          <figcaption>One contemplative boi.</figcaption>
      </figure>
  </section>
  <section>
      <h2>Secret Section</h2>
      <button class="secretBtn">Don't Click Pls.</button>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, quam ac
          lacinia iaculis, purus lorem fringilla purus, non congue nisi velit et justo. Donec
          tincidunt, neque a auctor dignissim, leo sapien mattis felis, et dignissim sem diam
          sit amet augue. In hac habitasse platea dictumst. Curabitur ipsum urna, auctor eget
          nunc vitae, mattis dapibus justo. Sed at nisl ornare, ornare risus id, rutrum tellus.
          Aenean eget ante ac elit blandit condimentum. Phasellus lectus sapien, commodo in
          justo a, volutpat interdum nunc. Nam non pharetra nunc.
      </p>
      <figure class="secretOtter">
          <img class="otterImg" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LEGGB4M5XY3I3CLXPJVSWOJ3LE.jpg&amp;w=767" alt="Otter mid sneeze.">
          <figcaption>This otter isn't happy with your decision.</figcaption>
      </figure>
  </section>
</main>`;

test('Very Important Section Button Click Test', () => {
  /**
   * In order to test DOM Manipulation stuff you need to add the elements you will be testing into the simluated DOM
   * environment. Meaning that if you need to test some decently complex things the test file might be kind of big.
   */
  document.body.innerHTML = documentContent;

  // Similarly to the how we have this wrapped in the DOMContentLoaded event in the main.js, we need to wait until our
  // dom had "loaded" before we can instantiate this.
  let domMan = new DomManipulation();
  domMan.addEvents();

  // Get all the needed elements.
  let importantSectionBtn = document.querySelector(".importantBtn");
  let importantOtter = document.querySelector(".importantOtter");
  let decisionElement = document.querySelector(".decision");

  // Simulate a click;
  importantSectionBtn.click();

  expect(decisionElement.textContent).toBe("Good choice, this is a good otter.");
  expect(importantOtter.classList).toContain("visible");
});

test('Secret Section Button Click Test', () => {
  /**
   * In order to test DOM Manipulation stuff you need to add the elements you will be testing into the simluated DOM
   * environment. Meaning that if you need to test some decently complex things the test file might be kind of big.
   */
  document.body.innerHTML = documentContent;

  // Similarly to the how we have this wrapped in the DOMContentLoaded event in the main.js, we need to wait until our
  // dom had "loaded" before we can instantiate this.
  let domMan = new DomManipulation();
  domMan.addEvents();

  // Get all the needed elements.
  let secretSectionBtn = document.querySelector(".secretBtn");
  let secretOtter = document.querySelector(".secretOtter");
  let decisionElement = document.querySelector(".decision");

  // Simulate a click;
  secretSectionBtn.click();

  expect(decisionElement.textContent).toBe("Bad decision my dude, try again.");
  expect(secretOtter.classList).toContain("visible");
});

test('Both Buttons Clicked Test', () => {
  /**
   * In order to test DOM Manipulation stuff you need to add the elements you will be testing into the simluated DOM
   * environment. Meaning that if you need to test some decently complex things the test file might be kind of big.
   */
  document.body.innerHTML = documentContent;

  // Similarly to the how we have this wrapped in the DOMContentLoaded event in the main.js, we need to wait until our
  // dom had "loaded" before we can instantiate this.
  let domMan = new DomManipulation();
  domMan.addEvents();

  // Get all the needed elements.
  let importantSectionBtn = document.querySelector(".importantBtn");
  let importantOtter = document.querySelector(".importantOtter");
  let secretSectionBtn = document.querySelector(".secretBtn");
  let secretOtter = document.querySelector(".secretOtter");
  let decisionElement = document.querySelector(".decision");

  // Simulate a click;
  importantSectionBtn.click();
  secretSectionBtn.click();

  expect(decisionElement.textContent).toBe("What's wrong with you?! Why would you have both active at the same time?");
  expect(importantOtter.classList).toContain("visible");
  expect(secretOtter.classList).toContain("visible");
});


