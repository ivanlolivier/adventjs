export default function learn(time, courses) {
  let maxTime = 0;
  let maxCourses = null;

  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const newMax = courses[i] + courses[j];
      if (newMax > maxTime && newMax <= time) {
        maxTime = newMax;
        maxCourses = [i, j];
      }
    }
  }

  return maxCourses;
}
