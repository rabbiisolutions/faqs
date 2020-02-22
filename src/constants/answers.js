import ListItem from "../components/basic/ListItem";

const q1 = {
  title: 'Frequently Asked Question',
  text: [
    {key: 'q11', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {key: 'q12', value: 'Lorem ipsum dolor sit amet, consectetur \n' +
      'adipiscing elit. Vitae id nunc tristique \n' +
      'sagittis aliquet integer suspendisse. Lorem\n' +
      ' bibendum vitae leo faucibus arcu facilisis\n' +
      ' lacus lacinia. Volutpat eget at accumsan \n' +
      'diam augue mattis neque quis quisque. \n' +
      'Condimentum eleifend vestibulum tristique \n' +
      'congue nibh.'}
  ],
  list: ListItem([
    {key: 'li1', text: 'Lorem ipsum dolor sit amet, consectetur.'},
    {key: 'li2', text: 'Lorem ipsum dolor sit amet, consectetur.'},
    {key: 'li3', text: 'Lorem ipsum dolor sit amet, consectetur.'},
  ])
};

export default q1;
