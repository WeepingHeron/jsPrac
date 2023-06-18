// 배열의 스프레드와 디스트럭쳐링

// I. 스프레드(spread)

// 1. 기본 문법
const arr1 = [1, 2, 3]
const arr2 = [...arr1]

console.log(arr2)

// 2. 활용
// a. 배열을 다수의 인자들로 펼침
const arr = [1, 2, 3, 4, 5, 6, 7]
const toAdd = ['둘', '셋', '넷']
arr.splice(1, 3, ...toAdd)
console.log(arr)

// b. concat보다 가독성 있는 배열 결합
const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]
const arr5 = arr3.concat(arr4)
const arr6 = [...arr3, ...arr4]
console.log(arr5, arr6)

// c. 배열의 얕은 복사
const arr7 = [1, 2, 3]
const arr8 = [...arr7]
console.log(arr7 === arr8)

// d. push, unshift 대신 사용
let arr9 = [1, 2, 3]
arr9 = [...arr9, 4]
console.log(arr9)
// 가독성 향상
// 배열이 든 변수의 참조값이 변할 필요가 있는 경우 (SPA 등...)

// e. 원본배열을 유지한 채 일정부분만 연결하여 복사
// splice는 원본배열을 변경
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 4 ~ 6을 제외한 새 배열 만들기
// 💡 slice는 원본을 변경하지 않음
const arr10 = [...orgArr.slice(0, 3), ...orgArr.slice(6, 9)]
console.log(arr10)

// II. 디스트럭쳐링(destructuring)

// 1. 문법
// 기존 코드
const arr11 = [1, 2, 3]
const x = arr11[0]
const y = arr11[1]
const z = arr11[2]
console.log(x, y, z)

// 디스트럭쳐링으로 간략화
const arr12 = [1, 2, 3]
const [a, b, c] = arr12
console.log(a, b, c)
