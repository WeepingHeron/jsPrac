// Object

// I. Object 클래스
// 이제까지 배운 자바스크립트 객체들의 원형
console.log(new String('ABC') instanceof Object, new Number(123) instanceof Object, [] instanceof Object, function () {} instanceof Object, globalThis instanceof Object)

// 생성자 함수
// 빈 객체 생성
console.log(new Object(), new Object(null), new Object(undefined))
// 각 값에 적합한 래핑함수로 작용
console.log(new Object(1), new Object('ABC'), new Object(true), new Object([1, 2, 3]))

// II. 주요 정적 메서드

// 1. assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음
// 대상 객체를 변경
// 결과 객체를 반환
// 얕은 복사
// 인자들:
// 대상 객체
// 원본 객체(들)
const obj1 = new Object()
const obj2 = { x: 1, y: 2 }
const obj3 = { y: 3 }
const obj4 = { z: { a: 1 } }
Object.assign(obj1, obj2, obj3, obj4)
console.log(obj1)
// 프로퍼티의 키가 같을 경우 뒤에 오는 인자의 것이 덮어씀
obj2.x = 0
obj4.z.a = 2
console.log(obj1)
// 얕은 복사

// 2. keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환
// 배열에 사용할 경우
const arr = [1, 2, 3, 4, 5]
console.log(Object.keys(arr), Object.values(arr), Object.entries(arr))
// 객체가 아닐 경우 객체로 변환
const str = 'ABCDEFG'
console.log(Object.keys(str), Object.values(str), Object.entries(str))

// 3. preventExtensions - 프로퍼티 추가 금지
// isExtensible - 해당 여부 확인
const obj = { x: 1, y: 2 }
console.log(Object.isExtensible(obj))
Object.preventExtensions(obj)
console.log(Object.isExtensible(obj))
obj.x++ // 프로퍼티 수정 가능
delete obj.y // 프로퍼티 삭제 가능
obj.z = 3 // 💡 프로퍼티 추가 금지
console.log(obj)
// 배열에 적용시
const arr1 = [1, 2]
Object.preventExtensions(arr1)
arr1[2] = 3 // 동작하지 않음
console.log(arr1)
arr1.push(3) // ⚠️ 오류 발생
console.log(arr1)

// 4. seal - 프로퍼티 추가와 삭제 금지
// isSealed - 해당 여부 확인
const obj5 = { x: 1, y: 2 }
console.log(Object.isSealed(obj5))
Object.seal(obj5)
console.log(Object.isSealed(obj5))
obj5.x++ // 프로퍼티 수정 가능
delete obj5.y // 💡 프로퍼티 삭제 금지
obj5.z = 3 // 💡 프로퍼티 추가 금지
console.log(obj5)

// 5. freeze - 객체 동결 - 읽기만 가능
// isFrozen - 해당 여부 확인
// 객체에 사용
const obj6 = { x: 1, y: 2 }
console.log(Object.isFrozen(obj6))
Object.freeze(obj6)
console.log(Object.isFrozen(obj6))
obj6.x++ // 💡 프로퍼티 수정 불가
delete obj6.y // 💡 프로퍼티 삭제 금지
obj6.z = 3 // 💡 프로퍼티 추가 금지
console.log(obj6)
// 배열에 사용
const arr2 = [1]
Object.freeze(arr2)
arr2[0]++ // 💡 요소 수정, 추가, 삭제 불가
console.log(arr2)
// 얕게만 적용
