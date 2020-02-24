const toggleHiddenByClass = (classes) => {
  // classes: the class list of element you want to toggle hidden class value
  classes.forEach((name) => {
    toggleHidden(document.getElementsByClassName(name)[0]);
  });
};

const toggleHiddenByClassWithStatus = (classList) => {
  // classes: list, the class list of element you want to toggle hidden class value
  // checkHidden: boolean, if true use === else use !==
  classList.forEach((item) => {
    const elem = document.getElementsByClassName(item.name)[0];
    if (item.checkHidden) {
      if (elem.classList[1] === 'hidden') toggleHidden(elem);
    } else {
      if (elem.classList[1] !== 'hidden') toggleHidden(elem);
    }
  });
};

const toggleHiddenById = (ids) => {
  // ids: the id list of element you want to toggle hidden class value
  ids.forEach((id) => {
    toggleHidden(document.getElementById(id));
  });
};

const toggleHidden = (elem) => {
  elem.classList.toggle('hidden');
};

const toggles = {
  toggleHiddenByClass: toggleHiddenByClass, toggleHiddenByClassWithStatus: toggleHiddenByClassWithStatus,
  toggleHiddenById: toggleHiddenById
};

export default toggles;
