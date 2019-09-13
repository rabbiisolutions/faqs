const  handleTabs = (e) => {
  /* handles or tab list clicks */
  let tabContent = document.getElementsByClassName("tab-content");
  console.log(typeof tabContent);
  for (let i=0; i<tabContent.length; i++) {
    tabContent[i].classList.add('hidden');
  } // hide all tab contents

  const target = e.target; // the clicked tab
  const targetContent = target.classList[1]; // get target tab content
  document.getElementById(targetContent).classList.remove('hidden'); // show content
  const tabs = document.getElementsByClassName('tab-link');
  for (let i=0; i<tabs.length; i++) {
    tabs[i].classList.remove('active');
  } // remove active status from all tab links
  target.classList.add('active'); // add active status to clicked tab
};

export default handleTabs;
