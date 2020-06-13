const url = "https://code.jquery.com/jquery-3.5.1.min.js";

(function () {
  "use strict";
  window.onload = () => {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
  };
})();