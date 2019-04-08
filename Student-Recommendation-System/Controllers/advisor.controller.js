// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';

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

function contains(main, sub) {
  // if the other array is a falsy value, return false
  if (!main) return false;

  // start by assuming the array doesn't contain the thing
  let result = false;
  for (let i = 0, l = main.length; i < l; i += 1) {
    // if anything in the array is the thing then change our mind from before

    if (main[i] instanceof Array) {
      if (main[i].equals(sub)) result = true;
    } else if (main[i] === sub) result = true;
  }
  // return the decision we left in the variable, result
  return result;
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
  if (Math.floor(Math.random() * 10) + 4 - request.params.grade >= 2) return response.send('leave');
  return response.send('stay');
};

exports.getAdviceForSem2Start = (request, response) => {
  let suggestions = [];
  Student.findOne({ user: request.params.id }).exec((err1, doc) => {
    if (err1) console.log(err1.message);
    if (doc) {
      console.log(`here1 ${doc}`);
      courses.find({}).exec((err2, docs) => {
        if (err1) console.log(err2.message);
        if (docs) {
          suggestions = docs.filter(course => contains(doc.courses, course));
        }
      });
    }
  });
  return response.send(suggestions);
};
