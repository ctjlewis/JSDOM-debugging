const url = "https://hammerjs.github.io/dist/hammer.min.js";

(function () {
  "use strict";
  window.onload = () => {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
  };
})();