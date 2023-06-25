// JSON

// I. JSON JavaScript Object Notation
// 복잡한 구조를 가질 수 있는 데이터를 한 줄의 문자열로 표현
// 서버와 클라이언트 등 데이터들을 주고받은 주체들 사이에 널리 사용

// II. JSON 객체의 정적 메서드

// 1. stringfy - 객체를 문자열로 직렬화(serialize)
const person = {
	name: '김달순',
	age: 23,
	languages: ['Korean', 'English', 'French'],
	education: {
		school: '한국대',
		major: ['컴퓨터공학', '전자공학'],
		graduated: true,
	},
}
const personStr = JSON.stringify(person)
console.log(typeof personStr)
console.log(personStr)
// 이후 배울 Symbol - 직렬화되지 않음
console.log(JSON.stringify(Symbol('hello'))) // ⚠️
// 이후 배울 BigInt - 오류 발생
console.log(JSON.stringify(1n)) // ⚠️

// 값이 함수인 프로퍼티는 직렬화되지 않음
const obj = {
	x: 1,
	y: 2,
	z: function () {
		return this.x + this.y
	},
}
console.log(obj.z())
const objStr = JSON.stringify(obj)
console.log(objStr)

const func1 = (a, b) => a + b
function func2() {
	console.log('HELLO')
}
const func1Str = JSON.stringify(func1)
const func2Str = JSON.stringify(func2)
console.log(func1Str)
console.log(func2Str)

// 2번째 인자: replacer 함수
// 직렬화될 방식을 지정
const obj1 = {
	a: 1,
	b: '2',
	c: 3,
	d: true,
	e: false,
}
// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj1, (key, value) => {
	if ((key && key < 'a') || key > 'c') {
		// 해당 프로퍼티 생략
		return undefined
		// ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
		// key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
		// key와 value를 로그로 출력해보며 확인해 볼 것
	}
	if (typeof value === 'number') {
		return value * 10
	}
	return value
})
console.log(objStr1)
// 2. 반환한 key의 배열 매개변수
const objStr2 = JSON.stringify(obj, ['b', 'c', 'd'])
console.log(objStr2)

// 3번째 인자: 인덴트
const obj2 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
		},
	},
}

;[JSON.stringify(obj2, null), JSON.stringify(obj2, null, 1), JSON.stringify(obj2, null, 2), JSON.stringify(obj2, null, '\t')].forEach((i) => console.log(i))

// 객체의 toJSON 프로퍼티
const obj3 = {
	x: 1,
	y: 2,
	toJSON: function () {
		return '훗, 나를 직렬화해보겠다는 건가'
	},
}

console
	.log(JSON.stringify(obj))

	[
		// 2. parse - 역직렬화
		(JSON.parse('1'),
		JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
		JSON.parse('true'),
		JSON.parse('null'),
		JSON.parse('[1, 2, 3]'),
		JSON.parse('{"x": 1, "y": 2}')) // ⚠️ key도 따옴표로 감싸야 함
	].forEach((i) => console.log(i))

// 2번째 인자: receiver 함수
const objStr3 = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}'

const obj4 = JSON.parse(objStr, (key, value) => {
	if (key === 'c') {
		// 해당 프로퍼티 생략
		return undefined
	}
	if (typeof value === 'number') {
		return value * 100
	}
	return value
})
console.log(obj4) // ⚠️ 내부까지 적용(배열 확인해 볼 것)

// III. 깊은 복사 (deep copy)
// JSON을 사용한 깊은 복사
const obj5 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 3,
			f: {
				g: 4,
			},
		},
	},
}
const obj6 = JSON.parse(JSON.stringify(obj5))
console.log(obj5)
console.log(obj6)
obj5.a++
obj5.b.c++
obj5.b.d.e++
obj5.b.d.f.g++
console.log(obj5)
console.log(obj6)

// 함수, Date, Symbol, BigInt프로퍼티는 JSON 방식으로는 불가 또는 제한적
const obj7 = {
	a: 1,
	b: 2,
	c: function () {
		return this.a + this.b
	},
	d: new Date(),
	e: Symbol('안녕'),
	// g: 1n // ⚠️ 오류 발생
}
const obj8 = JSON.parse(JSON.stringify(obj7))
console.log(obj7)
console.log(obj8)

// structuredClone
// 아직은 일부 브라우저(Web API 형태로) 및 환경에서만 지원
// JSON 방식보다 빠르고 효율적인 깊은 복사
// Date와 BigInt 제대로 복사 - 함수와 Symbol은 여전히 불가
