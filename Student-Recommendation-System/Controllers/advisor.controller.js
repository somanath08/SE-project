// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';
import Courses from '../Models/Course.model';

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

function getSuggestions(student, courses) {
  const suggestions = [];
  for (let i = 0; i < courses.length; i += 1) {
    suggestions.push({
      courseId: courses[i].courseId,
      score: student[courses[i].courseId],
      courseName: courses[i].courseName,
    });
  }
  return suggestions.sort(compare);
}

exports.getAdviceForSemStart = (request, response) => {
  let suggestions = [];
  Student.findOne({ user: request.params.id }).exec((err1, doc) => {
    if (err1) console.log(err1.message);
    if (doc) {
      console.log(`here1 ${doc}`);
      Courses.find({}).exec((err2, list) => {
        if (err2) console.log(err2.message);
        console.log('list: ', list);
        if (list) {
          suggestions = getSuggestions(doc, list);
          console.log(suggestions, 'Suggestions:');
          return response.send(suggestions);
        }
        return response.send(suggestions);
      });
    }
  });
};

exports.getAdviceForSemMid = (request, response) => {
  console.log('Advice in Mid');
  if (Math.floor(Math.random() * 5) + 4 - request.params.grade >= 2) return response.send('Leave');
  return response.send('Stay');
};

exports.getAdviceForSem2Start = (request, response) => {
  let suggestions = [];
  Student.findOne({ user: request.params.id }).exec((err1, doc) => {
    if (err1) console.log(err1.message);
    if (doc) {
      console.log(`here1 ${doc}`);
      Courses.find({}).exec((err2, docs) => {
        if (err1) console.log(err2.message);
        if (docs) {
          suggestions = docs.filter(course => contains(doc.courses, course));
        }
      });
    }
  });
  return response.send(suggestions);
};
