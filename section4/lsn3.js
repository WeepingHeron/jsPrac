// arguments - 함수 내에서 사용 가능한 지역 변수
// 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작
// 함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐

function add(a, b) {
	for (const arg of arguments) {
		console.log(arg)
	}
	return a + b
}

console.log(add(1, 3, 5, 7))
// for ... of가 가능한 이유: iterable이기 때문
// 화살표 함수에서는 arguments 사용 불가!

// ...변수그룹명 - 나머지 변수(rest parameters)
// 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때
// 마지막 인자로만 사용 가능
// arguments와는 달리 실제 배열임
console.log('3.', classIntro(3, '김민지', '영희', '철수', '보라')) // 호이스팅

function classIntro(classNo, teacher, ...children) {
	console.log('1.', children)
	console.log('2.', arguments)

	let childrenStr = ''
	for (const child of children) {
		if (childrenStr) childrenStr += ', '
		childrenStr += child
	}
	return `${classNo}반의 선생님은 ${teacher}, ` + `학생들은 ${childrenStr}입니다.`
}

const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

function doMultiArms(x, y, ...arms) {
	let result = x
	for (const arm of arms) {
		if (typeof arm !== 'function') continue
		result = arm(result, y)
	}
	return result
}

console.log(
	doMultiArms(8, 3, add, mul, 1, true),
	doMultiArms(8, 3, add, mul, sub),
	doMultiArms(8, 3, add, mul, sub, div),
	doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
)
