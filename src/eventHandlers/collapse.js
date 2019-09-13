let lastSection = null;

const toggle = (panel) => {
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  panel.previousSibling.classList.toggle("shown");
  changeIcon(panel.previousSibling);
};

const changeIcon = (toggle) => {
  const hidden = 'hidden';
  toggle.childNodes[1].classList.toggle(hidden); // down icon
  toggle.childNodes[2].classList.toggle(hidden); // up icon
};

const collapseHandler = evt => {
  let element = evt.target;
  const elemClass = element.classList[0];
  if (elemClass !== "section-toggle") {
    // the click element came from from icon or title span
    if (elemClass === "section-title"){
      element = element.parentNode; // set element to parent of span/icon
    }
    else if (elemClass === "down") {
      element = element.parentNode; // set element to parent of parent of span/icon
    }
    else if (elemClass === "up") {
      element = element.parentNode; // set element to parent of parent of span/icon
    }
    else  if (elemClass === undefined) {
      element = element.parentNode.parentNode; // set element to parent of parent of span/icon
    }
    else  if (elemClass === "injected-svg") {
      element = element.parentNode.parentNode.parentNode; // set element to parent of parent of span/icon
    }
  }
  //console.log(elemClass);
  //element.classList.toggle("shown");
  let current = element.nextElementSibling;
  if (lastSection && lastSection !== current) {
    // if lastNode is not null AND the lastNode is not equal to current element
    toggle(lastSection); // toggle last node
  }

  if (lastSection === current) { // if current element equal to lastNode
    // null the last element to avoid double show (current and last element)
    lastSection = null;
  } else {
    lastSection = current; // lastNode equal to current element
  }
  toggle(current);
  element.scrollIntoView();
};

export default collapseHandler;
