console.log('Hello', '철수')

const SALUTATION = 'Hello,'
let person = '철수'

console.log(SALUTATION, person)

person = '영희'

console.log(SALUTATION, person)

// 값의 의미 나타냄
// 값의 재활용
// 변경되는 상태를 가리키는 식별자

let x
// x라는 변수 주머니를 만듬
console.log(x)
// undefined: '아직 값이 정해지지 않았다'라는 '값'

x = 1
// x 안에 1이라는 값을 넣음
console.log(x)

let y = x
// x가 가진 값을 y에 할당
console.log('변경 전', x, y)

x = 'Hello!'
console.log('변경 후', x, y)
// C 등의 언어와 달리, 메모리상 가리키는 위치가 변경
// 차지하는 자리가 다른 크기의 (자료형이 다른) 데이터가 재할당될 수 있으므로

const PI = 3.14
console.log('원주율:', PI)
// 담긴 값이 바뀔 수 없음, 흔히 대문자로 명명(여러 곳에서 사용 될 공통 값인 경우)

let a = 1,
	b = 2,
	c = 3
const X = 4,
	Y = 5,
	Z = 6

console.log(a, b, c)
console.log(X, Y, Z)
// 실전에서 주로 사용 x

// 영문, 한글 및 유니코드, 숫자 사용 가능
// 특수문자는 $ 또는 _
// 숫자로 시작할 수 없음
// 공백(스페이스)사용 불가
