// 원시 자료형: 값 하나만 담는 단순 자료형
const a = true,
	b = 123.45,
	c = '안녕하세요'
console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)

let d
console.log(d, typeof d)
d = null
console.log(d, typeof d)

const e = Symbol('hello')
console.log(typeof e)

// boolean
// 직접 할당되기 보다는 반환값으로 프로그램 곳곳에서 활용됨

let isEmployed = true
let isMarried = false

console.log('직업 있음:', isEmployed)
console.log('기혼:', isMarried)

// number
// JavaScript에서는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
// 정수는 2^53-1까지 안정적으로 표현 가능 - 더 큰 정수는 BigInt로

let integer = 100
let real = 12.34
let negative = -99

console.log(integer, real, negative)

// string
// 큰따옴표, 작은 따옴표, 백틱으로 둘러싸인 텍스트 데이터
// 유니코드 문자

let first_name = 'Brendan'
let last_name = 'Eich'
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`

console.log(first_name, last_name)
console.log(description)

// undefined
// 값이 부여되지 않은 상태라는 의미
// 그러나 undefined도 '값'이다

let x
console.log(typeof x)

// null
// 의도적인 빈 값, 그러나 null 역시 '값'
// object등이 들어있거나 반환되어야 하지만 없을 때 주로 사용

let y
console.log('값 넣기 전', typeof y)

y = null
console.log('null값 넣은 후', typeof y)

let z = 1
console.log('변경 전', z)

z = null
console.log('변경 후', z)
