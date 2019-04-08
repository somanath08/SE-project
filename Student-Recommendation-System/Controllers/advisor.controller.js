// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';
import Grade from '../Models/Grades.model';

const courses = [
  {
    id: 'pc',
    name: 'Parallel Computing',
    score: 0,
    avg: 6,
  },
  {
    id: 'dc',
    name: 'Distributed Computing',
    score: 0,
    avg: 6,
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    score: 0,
    avg: 6,
  },
  {
    id: 'cg',
    name: 'Cryptography',
    score: 0,
    avg: 6,
  },
  {
    id: 'nn',
    name: 'Neural Networks',
    score: 0,
    avg: 6,
  },
  {
    id: 'ip',
    name: 'Image Processing',
    score: 0,
    avg: 6,
  },
];

function compare(a, b) {
  return a.score - b.score;
}

function getSuggestions(doc) {
  courses[0].score += doc.pc;
  courses[1].score += doc.dc;
  courses[2].score += doc.cn;
  courses[3].score += doc.cg;
  courses[4].score += doc.nn;
  courses[5].score += doc.ip;
  return courses.sort(compare);
}

exports.getAdviceForSemStart = (request, response) => {
  let suggestions = [];
  Student.findOne({ user: request.params.id }).exec((err1, doc) => {
    if (err1) console.log(err1.message);
    if (doc) {
      console.log(`here1 ${doc}`);
      suggestions = getSuggestions(doc);
    }
  });
  return response.send(suggestions);
};

exports.getAdviceForSemMid = (request, response) => {
  if (Grade[request.params.user][request.params.id] - request.params.grade >= 2) response.send('leave');
  else response.send('stay');
};

exports.getAdviceForSem2Start = (request, response) => {
  
};
