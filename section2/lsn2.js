// JavaScript는 동적 타입을 가진 언어
// 특정 값이 할당된 변수에, 그와 다른 자료형의 값을 넣는 것이 가능
// 자유롭지만 그만큼 자료형 관련 오류들에 취약함

let job = '학생'
let age = 17

console.log(job, age)
console.log(typeof age)

// 숫자 값이 들어있던 age에 문자열 값을 넣음
age = '열일곱'

console.log(age)

console.log(typeof age)
