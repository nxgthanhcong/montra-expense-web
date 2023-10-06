const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function covisual() {
  const Helper = {
    copyToClipBoard(text) {
      // Create a temporary textarea element
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Append the textarea to the document
      document.body.appendChild(textArea);

      // Select the text in the textarea
      textArea.select();

      try {
        // Execute the "copy" command to copy the selected text
        document.execCommand("copy");
        console.log("Text copied to clipboard: " + text);
      } catch (err) {
        console.error("Unable to copy text: " + err);
      }

      // Remove the textarea from the document
      document.body.removeChild(textArea);
    },
  };

  // Implement click color to copy variables
  const clickableColors = $$(".clickable-color");
  clickableColors.forEach((element) => {
    element.addEventListener("click", function () {
      // Get variable value
      const text = "" + this.style.backgroundColor;
      Helper.copyToClipBoard(text);
    });
  });

  // Implement click to copy typo class name
  const clickableTypos = $$(".clickable-typo");
  clickableTypos.forEach((element) => {
    element.addEventListener("click", function () {
      // Get variable value
      const text = "" + this.dataset.classname;
      Helper.copyToClipBoard(text);
    });
  });

  // Implement click to copy img icon tag
  const clickableIcons = $$(".clickable-icon");
  clickableIcons.forEach((element) => {
    element.addEventListener("click", function () {
      // Get variable value
      const text = "" + this.innerHTML;
      Helper.copyToClipBoard(text);
    });
  });

  // Check html injected
  console.log("core-cisual.js injected");
})();

this;
