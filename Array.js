const fruits = ["🍎", "🍌"];
console.log(fruits);

for (fruit of fruits) {
  console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));

fruits.push("🍓", "🍈");
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.push("🍓", "🍈", "🍉");
console.log(fruits);

fruits.splice(1, 1); // 1번인덱스로부터 1개를 자른다.
console.log(fruits);
fruits.splice(1, 1, "🍊", "🍊"); //1번인덱스로부터 1개를 지운뒤 다른 두개의 배열을 넣는다.
console.log(fruits);

const fruits2 = ["🥥"];
const newFruits = fruits.concat(fruits2); //합쳐주는 함수
console.log(newFruits);

console.log(fruits.indexOf("🍎")); //처음 인덱스 반환
fruits.push("🍎");
console.log(fruits.lastIndexOf("🍎")); //마지막 인덱스반환
console.log(fruits.includes("🥥")); //배열에 포함되어 있는지 확인(불리언타입으로 반환)
