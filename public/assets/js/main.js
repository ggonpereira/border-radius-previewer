(() => {
  function declareVar() {
    const leftTop = document.querySelector(".left-top-input");
    const rightTop = document.querySelector(".right-top-input");
    const leftBottom = document.querySelector(".left-bottom-input");
    const rightBottom = document.querySelector(".right-bottom-input");
    const allInputs = document.querySelectorAll(".input");
    const options = document.querySelectorAll(".type");
    const box = document.querySelector(".box");
    const showCode = document.querySelector(".show-code");
    const copyTextBtn = document.querySelector(".copy-text");

    return [
      leftTop,
      rightTop,
      leftBottom,
      rightBottom,
      allInputs,
      options,
      box,
      showCode,
      copyTextBtn,
    ];
  }

  function checkSelected() {
    const [, , , , , options] = declareVar();
    let checked;

    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        checked = options[i].value;
      }
    }

    return checked;
  }

  function addListeners() {
    const [, , , , allInputs, , , , copyTextBtn] = declareVar();

    allInputs.forEach((item) => {
      item.addEventListener("keyup", (e) => {
        let target = e.target;
        runApp(target);
      });
    });

    copyTextBtn.addEventListener("click", copyText);

    copyTextBtn.addEventListener("mouseout", () => {
      setTimeout(() => {
        copyTextBtn.innerHTML = "Copy to Clipboard";
      }, 250);
    });
  }

  function runApp(target) {
    let checked = checkSelected();
    let receivedTarget = target;

    if (checked == "single") {
      eachOne();
      return;
    }
    if (checked == "all") {
      allSame(receivedTarget);
      return;
    }
  }

  function eachOne() {
    const [leftTop, rightTop, leftBottom, rightBottom, , , box] = declareVar();
    const inputs = [leftTop, rightTop, leftBottom, rightBottom];

    inputs.forEach((e) => {
      if (e.value == "") e.value = 0;
    });

    box.removeAttribute("style");
    box.style.borderTopLeftRadius = `${leftTop.value}px`;
    box.style.borderTopRightRadius = `${rightTop.value}px`;
    box.style.borderBottomLeftRadius = `${leftBottom.value}px`;
    box.style.borderBottomRightRadius = `${rightBottom.value}px`;

    showCode();
  }

  function allSame(target) {
    const [leftTop, rightTop, leftBottom, rightBottom, , , box] = declareVar();
    const inputs = [leftTop, rightTop, leftBottom, rightBottom];
    let receivedTarget = target;

    inputs.forEach((e) => {
      if (e.value == "") e.value = 0;
    });

    if (receivedTarget === leftTop) {
      box.removeAttribute("style");
      box.style.borderTopLeftRadius = `${leftTop.value}px`;
      box.style.borderBottomLeftRadius = `${leftTop.value}px`;
      box.style.borderTopRightRadius = `${leftTop.value}px`;
      box.style.borderBottomRightRadius = `${leftTop.value}px`;
    }

    if (receivedTarget === rightTop) {
      box.removeAttribute("style");
      box.style.borderTopLeftRadius = `${rightTop.value}px`;
      box.style.borderBottomLeftRadius = `${rightTop.value}px`;
      box.style.borderTopRightRadius = `${rightTop.value}px`;
      box.style.borderBottomRightRadius = `${rightTop.value}px`;
    }

    if (receivedTarget === leftBottom) {
      box.removeAttribute("style");
      box.style.borderTopLeftRadius = `${leftBottom.value}px`;
      box.style.borderBottomLeftRadius = `${leftBottom.value}px`;
      box.style.borderTopRightRadius = `${leftBottom.value}px`;
      box.style.borderBottomRightRadius = `${leftBottom.value}px`;
    }

    if (receivedTarget === rightBottom) {
      box.removeAttribute("style");
      box.style.borderTopLeftRadius = `${rightBottom.value}px`;
      box.style.borderBottomLeftRadius = `${rightBottom.value}px`;
      box.style.borderTopRightRadius = `${rightBottom.value}px`;
      box.style.borderBottomRightRadius = `${rightBottom.value}px`;
    }

    showCode();
  }

  function showCode() {
    const [, , , , , , box, showCode] = declareVar();
    const appliedStyle = `${box.getAttribute("style")}`;

    showCode.innerHTML = "";
    showCode.innerHTML = appliedStyle;
  }

  function copyText() {
    const [, , , , , , , , copyTextBtn] = declareVar();

    const range = document.createRange();
    range.selectNode(document.querySelector(".show-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    copyTextBtn.innerHTML = "COPIED!";
  }

  addListeners();
})();
