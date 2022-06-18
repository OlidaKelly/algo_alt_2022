/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ students }: { students: Student[] }): Student[] {
  const arrayStudents = students.sort((a, b) => {

    const condition = a.age > b.age ? 1 : a.age === b.age ? (a.name > b.name ? 1 : -1 ) : -1;
    return condition;
  });

  return arrayStudents;
}

// used interfaces, do not touch
export interface Student {
  name: string;
  age: number;
  skills: string[];
}


// return students.sort((a: Student, b: Student) => {
//   if (a.age === b.age) {
//     if (a.name > b.name) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }
//   return a.age - b.age;
// });
