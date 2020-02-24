const toggleHiddenByClass = (classes) => {
  // classes: the class list of element you want to toggle hidden class value
  classes.forEach((name) => {
    toggleHidden(document.getElementsByClassName(name)[0]);
  });
};

const toggleAllHiddenByClass = (classes) => {
  // hides all elements with the class name
  classes.forEach((name) => {
    let list = document.getElementsByClassName(name);
    for (let i = 0; i < list.length; i++) {
      toggleHidden(list[i]);
    }
  });
};

const toggleAllHiddenByClassWithStatus = (classList) => {
  // classes: list, the class list of element you want to toggle hidden class value
  // checkHidden: boolean, if true use === else use !==
  classList.forEach((item) => {
    let list = document.getElementsByClassName(item.name);
    for (let i = 0; i < list.length; i++) {
      //toggleHidden(list[i]);
      if (item.hasHiddenClass) {
        if (list[i].classList[1] === 'hidden') toggleHidden(list[i]);
      } else {
        if (list[i].classList[1] !== 'hidden') toggleHidden(list[i]);
      }
    }
  });
};

const toggleHiddenByClassWithStatus = (classList) => {
  // classes: list, the class list of element you want to toggle hidden class value
  // checkHidden: boolean, if true use === else use !==
  classList.forEach((item) => {
    const elem = document.getElementsByClassName(item.name)[0];
    if (item.hasHiddenClass) {
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
  toggleHiddenById: toggleHiddenById, toggleAllHiddenByClass: toggleAllHiddenByClass,
  toggleAllHiddenByClassWithStatus: toggleAllHiddenByClassWithStatus
};

export default toggles;
