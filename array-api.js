{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join(", ")); //배열 -> 문자열
}
{
  const fruits = "apple, banana, orange";
  console.log(fruits.split(",")); //문자열 -> 배열
}
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.reverse()); // 역순으로 정렬
}
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.slice(2, 5));
}
{
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student("A", 29, true, 45),
    new Student("B", 29, false, 80),
    new Student("C", 29, true, 90),
    new Student("D", 29, false, 66),
    new Student("E", 29, true, 88),
  ];
  {
    let result = students.find((Student) => Student.score === 90); //score가 90인 사람을 반환
    console.log(result);
  }
  {
    let result = students.filter((student) => student.enrolled); // enrolled가 true인 사람을 배열로 반환
    console.log(result);
  }
  {
    let result = students.map((student) => student.score); //점수를 배열에 담아준다.
    console.log(result);
  }
  {
    const result = students.some((student) => student.score < 50); //점수가 50보다 작은사람이 있으면 true 반환
    console.log(result);

    const result2 = students.every((student) => student.score >= 50); // 점수가 50보다 작은 사람이 없어야 true 반환
    console.log(result2);
  }
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  {
    const result = students.map((student) => student.score).join(", ");
    console.log(result);
  }
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => b - a)
      .join(", ");
    console.log(result);
  }
}
