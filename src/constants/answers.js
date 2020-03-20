import ListItem from "../components/basic/ListItem";

// CLIENTS
// Pricing and payment
const cpp1 = {
  title: 'How much does a session cost', key: 'cpp1',
  text: [
    {key: 'pp1a', value: 'To know the specific cost of a session you need to sign up so that we' +
          ' can send you the catalog with all the different prices we have.'},
    {key: 'pp1a', value: 'Below are some of the factors that determine the cost of a session:'}
  ],
  list: ListItem([
    {key: 'cppli1', text: 'Is it a group or personal tuition? A student can partner with a friend' +
          ' on the same level to take tuition classes for a subject that they are both ' +
          'struggling with. This reduces the cost as compared to being tutored alone.'},
    {key: 'cppli2', text: 'How long has the teacher been teaching? Having a young teacher is less' +
          ' costly compared to a tutor who has been teaching for some time. The cost will ' +
          'increase depending on the achievements the teacher has made in the course of ' +
          'their career and the number of years they have taught.'}
  ])
};

const cpp2 = {
  title: 'What are the payment arrangements', key: 'cpp2',
  text: [
    {key: 'cpp2a', value: 'The first payment to be made is for the assessment class. After the ' +
          'assessment class with the student, a timetable will be made in consultation with ' +
          'the parent, and the parent invoiced of the amount they are expected to pay and ' +
          'when they should pay.'},
    {key: 'cpp2b', value: 'Also, all payments are done through our paybill number, which is' +
          ' 3012165. And after every payment, you should be given a receipt.'}
  ]
};

// Sessions
const cs1 = {
  title: 'How long is a single session', key: 'cs1',
  text: [
    {key: 'cs1a', value: 'The average length of a session is 90mins.'},
    {key: 'cs1b', value: 'This period is good enough to allow the tutor to introduce a topic, ' +
          'teach it, give an assignment and allow for consultation from the student. Most ' +
          'lessons in schools are 40 mins, but for revision, 90 minutes per session is good' +
          ' as it would be like a double lesson in school.'},
    {key: 'cs1c', value: 'The tutor can also extend for a few minutes to finish what they' +
          ' intended to cover for the session.'}
  ]
};

const cs2 = {
  title: 'How many sessions are good for a student', key: 'cs2',
  text: [
    {key: 'cs2a', value: 'In a month the student should not have less than 3 sessions for any' +
          ' subjects she is taking tuition in and at times even more.'},
    {key: 'cs2b', value: 'The number of sessions the students should have should be determined' +
          ' based on the depth of their problem in the particular subject of interest. After ' +
          'the assessment class, it is easier to decide on the number of sessions the ' +
          'student should have, as we would have a good picture of the challenges they face' +
          ' in the subject.'}
  ]
};

const cs3 = {
  title: 'How do you postpone or cancel a class', key: 'cs3',
  text: [
    {key: 'cs3a', value: 'Life is not always predictable and there can be reasons, such as' +
          ' sickness or emergencies, that may facilitate the postponement or cancellation of classes.'},
    {key: 'cs3b', value: 'We advise that if you urgently need to cancel a class inform the main ' +
          'office a day in advance as a lot goes into preparing for a class. We will then ' +
          'contact you for an arrangement on when we can reschedule for the class so that we ' +
          'do not delay the progress of the student.'}
  ]
};

// Tutors
const ct1 = {
  title: 'Why do you have a same gender tuition policy', key: 'ct1',
  text: [
    {key: 'ct1a', value: 'Home tuition is a very relational process where the tutor the tutor' +
          ' mentors the student at times in life issues or the student consult the tutor on' +
          ' matters more than academics. It is because of this relational aspect of the' +
          ' process that we find it prudent to have a same gender policy unless the session' +
          ' involves two students of different genders.'}
  ]
};

const ct2 = {
  title: 'Will I get an experienced tutor', key: 'ct2',
  text: [
    {key: 'ct2a', value: 'We have tutors with various levels of experience and achievements.'},
    {key: 'ct2b', value: 'We have tutors who are national examiners and have taught for a ' +
          'considerable number of years. We also have tutors who are starting in their ' +
          'careers and have graduated with a relevant degree from recognized universities.'},
    {key: 'ct2c', value: 'We only engage teachers as tutors and not anyone who has not been' +
          ' trained to be a professional teacher.'},
    {key: 'ct2d', value: 'Whereas for trainers, for classes that are not academic, they need ' +
          'to show competence in teaching another person the specific skill. Knowing a skill' +
          ' and knowing how to teach it is different, therefore they need to show the ability' +
          ' to teach students in various stages of learning, which is from amateurs to ' +
          'professionals.'}
  ]
};

const ct3 = {
  title: 'Do you have tutors for all subjects', key: 'ct3',
  text: [
    {key: 'ct3a', value: 'We have tutors for all subjects in primary and high school and more' +
          ' than 400 tutors in total. We also have tutors for foreign languages, sports,' +
          ' talents and other areas that you can look at on our website’s homepage. We ' +
          'even have trained tutors in teaching and giving care to special needs students.'}
  ]
};


// About Us
const cau1 = {
  title: 'Where are your physical office', key: 'cau1',
  text: [
    {key: 'cau1', value: 'We have our physical offices at Anniversary Towers, mezzanine floor.' +
          ' We also meet clients at a place of their convenience either a nearby hotel, ' +
          'offices or home when we have the assessment class. Before tuition begins, ' +
          'we always send an assessor to look at the student’s performance and plan' +
          ' with the student for tuition. Also, the assessor talks with the parent to' +
          ' discuss various issues regarding tuition.'}
  ]
};

// TUTORS
// Pricing and payment
const tpp1 = {
  title: 'How much will I earn I a session', key: 'tpp1',
  text: [
    {key: 'tp1a', value: 'To know the specific amount you will earn per session, you will ' +
          'have to sign up. We will then send you our catalog with all the different ' +
          'prices we have.'},
    {key: 'tp1a', value: 'Though, one determinant of the amount you will earn is the type' +
          ' of tutor the student needs. Tutoring a student who studies an international' +
          ' curricular is paid differently from a student studying the Kenyan System. ' +
          'And you can only tutor a system and level you are qualified and have experience' +
          ' in.'}
  ]
};

const tpp2 = {
  title: 'What are the payment arrangements', key: 'tpp2',
  text: [
    {key: 'tpp2a', value: 'Tutors are paid monthly for the classes they have taught per ' +
          'client. Though, in special circumstances, an alternative payment arrangement ' +
          'can be discussed with the tutor.'},
    {key: 'tpp2b', value: 'Tutors are not to receive any payments directly from the client' +
          ' with regards to the tuition classes, and they expected to educate such a ' +
          'client on the laid procedures for paying for a class. You should tell clients' +
          ' to make any payment to our Paybill number, which is 3012165.'}
  ]
};

// Sessions
const ts1 = {
  title: 'How long is a single session', key: 'ts1',
  text: [
    {key: 'ts1a', value: 'The average length of a session is 90mins.'},
    {key: 'ts1b', value: 'This period is good enough to allow you to; introduce a topic, ' +
          'teach it, give an assignment and allow for consultation from the student.' +
          ' Most lessons in schools are 40 mins, but for revision, 90 minutes per session' +
          ' is good as it would be like a double lesson in school.'},
    {key: 'ts1c', value: 'You are free to extend a session for a few minutes to finish what' +
          ' you intended to cover for the session.'}
  ]
};

const ts2 = {
  title: 'How many students can I teach', key: 'ts2',
  text: [
    {key: 'ts2a', value: 'There is no restriction on the number of students you can teach, ' +
          'though you will only be allowed to teach another student(s) if you bring great' +
          ' improvement to your current student.'},
    {key: 'ts2b', value: 'Apart from this, we will also look at the timing of the next class' +
          ' and the distance from your place to the next student. These are some of the ' +
          'considerations we take into account before assigning you another student.'}
  ]
};

const ts3 = {
  title: 'How do you postpone or cancel a class', key: 'ts3',
  text: [
    {key: 'ts3a', value: 'Life is not always predictable and there can be reasons, such as' +
          ' sickness or emergencies, that may facilitate the postponement or cancellation of classes.'},
    {key: 'ts3b', value: 'We advise that if you urgently need to cancel a class inform the main ' +
          'office a day in advance as a lot goes into preparing for a class. We will then ' +
          'contact you for an arrangement on when we can reschedule for the class so that we ' +
          'do not delay the progress of the student.'}
  ]
};

// clients
const tc1 = {
  title: 'Why do you have a same gender tuition policy', key: 'tc1',
  text: [
    {key: 'tc1a', value: 'Home tuition is a very relational process where the tutor the tutor' +
          ' mentors the student at times in life issues or the student consult the tutor on' +
          ' matters more than academics. It is because of this relational aspect of the' +
          ' process that we find it prudent to have a same gender policy unless the session' +
          ' involves two students of different genders.'}
  ]
};

const tc2 = {
  title: 'Who should apply to be a tutor', key: 'tc2',
  text: [
    {key: 'tc2a', value: 'We have and need tutors with various levels of experience and ' +
          'achievements as students and clients have different preferences and needs.'},
    {key: 'tc2b', value: 'We need tutors who are national examiners and have taught for a ' +
          'considerable number of years. We also need tutors who are starting in their ' +
          'careers and have graduated with a relevant degree from recognized universities.'},
    {key: 'tc2c', value: 'Though, we only engage teachers as tutors and not anyone who has not been' +
          ' trained in the profession of teaching.'},
    {key: 'tc2d', value: 'Whereas for trainers, for classes that are not academic, you need' +
          ' to show competence in teaching another person the specific skill. Knowing a ' +
          'skill and knowing how to teach it is different, therefore you need to show the' +
          ' ability to teach students in various stages of learning, which is from amateurs' +
          ' to professionals.'}
  ]
};

const tc3 = {
  title: 'Will my information be displayed publicly', key: 'tc3',
  text: [
    {key: 'tc3a', value: 'We do not display the information about our tutors to the general' +
          ' public. The information you give us will only be seen by us, and we can only' +
          ' share it with a client when you accept to take their classes. The reason we' +
          ' share it with clients is because you will be going to their home, and' +
          ' teaching their children. Therefore, they would want to know who they will' +
          ' be entrusting their child to.'}
  ]
};


// About Us
const tau1 = {
  title: 'Where are your physical office', key: 'tau1',
  text: [
    {key: 'tau1', value: 'We have our physical offices at Anniversary Towers, mezzanine ' +
          'floor. We also can meet with our tutors at the place of their convenience, ' +
          'even a restaurant, when planned. We can also have an online video meeting' +
          ' with our tutors at any time as long as we plan for it.'}
  ]
};

const clients = {
    cau1: cau1, ct3: ct3, ct2: ct2, ct1: ct1, cs3: cs3, cs2: cs2, cs1: cs1, cpp2: cpp2, cpp1: cpp1
};

const tutors = {
  tau1: tau1, tc3: tc3, tc2: tc2, tc1: tc1, ts3: ts3, ts2: ts2, ts1: ts1, tpp2: tpp2, tpp1: tpp1
};

const answers = {
  clients: clients, tutors: tutors
};

export default answers;
