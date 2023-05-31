// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100
let real = 1.234
let negative = -5.67
console.log(typeof integer, typeof real, typeof negative)

// 무한대에는 양음이 있음
let x = 1 / 0
console.log(x, typeof x)
console.log(-x, typeof -x)
let y = -1 / 0
console.log(y, typeof y)
let z = Infinity
console.log(z, typeof z)

// NaN은 양음이 없음
let a = 1 / 'abc'
let b = 2 * '가나다'
let c = NaN
console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)
console.log(-NaN)

// 주어진 값이 NaN인지 여부를 확인하는 방법
let d = 1 / 'abc'
console.log(
	d,
	d == NaN,
	d === NaN,
	isNaN(d), // 숫자가 아닐 시 true
	Number.isNaN(d) // 보다 엄격한 버전
)

// isNaN과 Number.isNaN의 차이
console.log(typeof '1', isNaN('1'), Number.isNaN('1')) // 특정 숫자로 변환 가능한 문자
console.log(typeof true, isNaN(true), Number.isNaN(true)) // true는 1, false는 0으로 변환됨
console.log(typeof 'a', isNaN('a'), Number.isNaN('a')) // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이
console.log(typeof (1 / 'a'), isNaN(1 / 'a'), Number.isNaN(1 / 'a')) // NaN값인 경우
