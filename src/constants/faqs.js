import answers from "./answers";

const categories = ['Pricing and Payment', 'Sessions', 'About Us'];

const clientFaqs = [
  {key: 'cf1', category: categories[0], list: [
      {key: 'cfaq1', answer: answers.clients.cpp1},
      {key: 'cfaq2', answer: answers.clients.cpp2}]},
  {key: 'cf2', category: categories[1], list: [
      {key: 'cfaq3', answer: answers.clients.cs1},
      {key: 'cfaq4', answer: answers.clients.cs2},
      {key: 'cfaq5', answer: answers.clients.cs3}]},
  {key: 'cf3', category: 'Tutors', list: [
      {key: 'cfaq6', answer: answers.clients.ct1},
      {key: 'cfaq7', answer: answers.clients.ct2},
      {key: 'cfaq8', answer: answers.clients.ct3}]},
  {key: 'cf4', category: categories[2], list: [
      {key: 'cfaq9', answer: answers.clients.cau1},]},
];

const tutorFaqs = [
  {key: 'tf1', category: categories[0], list: [
      {key: 'tfaq1', answer: answers.tutors.tpp1},
      {key: 'tfaq2', answer: answers.tutors.tpp2}]},
  {key: 'tf2', category: categories[1], list: [
      {key: 'tfaq3', answer: answers.tutors.ts1},
      {key: 'tfaq4', answer: answers.tutors.ts2},
      {key: 'tfaq5', answer: answers.tutors.ts3}]},
  {key: 'tf3', category: 'Clients', list: [
      {key: 'tfaq6', answer: answers.tutors.tc1},
      {key: 'tfaq7', answer: answers.tutors.tc2},
      {key: 'tfaq8', answer: answers.tutors.tc3}]},
  {key: 'tf4', category: categories[2], list: [
      {key: 'tfaq9', answer: answers.tutors.tau1},]},
];

const faqsList = {
  tutorFaqs: tutorFaqs, clientFaqs: clientFaqs
};

export default faqsList;
