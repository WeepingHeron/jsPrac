// 프로퍼티 어트리뷰트

// I. 프로퍼티 어트리뷰트 (property attributes)
// 객체의 프로퍼티가 생성될 때 엔진에 의해 자동 정의되는 상태
// 프로퍼티에는 두 종류가 있음
const person = {
	// ⭐️ 1. 데이터 프로퍼티들
	fullName: '홍길동',
	ageInNumber: 25,

	// ⭐️ 2. 접근자 프로퍼티들
	get name() {
		return this.fullName
			.split('')
			.map((letter, idx) => (idx === 0 ? letter : '*'))
			.join('')
	},
	get age() {
		return this.ageInNumber + '세'
	},
	set age(age) {
		this.ageInNumber = Number(age)
	},
}

console.log(person.name, person.age)

// 1. 데이터 프로퍼티의 어트리뷰트
// [[Value]]: 프로퍼티의 값, 기본값 undefined
// [[Writable]]: 값 갱신 가능 여부 - false 일 경우 읽기 전용, 기본값 false
// [[enumerable]]: 열거(for ... in문, Object.keys 사용) 가능 여부, 기본값 false
// [[Configurable]]: 프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부, 기본값 false

// 2. 접근자 프로퍼티의 어트리뷰트
// [[Get]]: 객체로부터 값을 읽을 때 호출되는 getter 함수, 기본값 undefined
// [[Set]]: 객체에 값을 저장할 때 호출되는 setter 함수, 기본값 undefined
// [[Enumerable]]: 열거(for ... in문, Object.keys 사용) 가능 여부, 기본값 false
// [[Configurable]]: 프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부, 기본값 false

// II. Object의 프로퍼티 어트리뷰트 관련 정적 메서드들

// 1. getOwnPropertyDescriptor, getOwnPropertyDescriptors
// 객체 프로퍼티 어트리뷰트들의 설명자를 반환
const person1 = {
	// ⭐️ 1. 데이터 프로퍼티들
	fullName: '홍길동',
	ageInNumber: 25,

	// ⭐️ 2. 접근자 프로퍼티들
	get name() {
		return this.fullName
			.split('')
			.map((letter, idx) => (idx === 0 ? letter : '*'))
			.join('')
	},
	get age() {
		return this.ageInNumber + '세'
	},
	set age(age) {
		this.ageInNumber = Number(age)
	},
}
// 특정 프로퍼티를 지정하여 반환
console.log('1.', Object.getOwnPropertyDescriptor(person1, 'fullName'))
console.log('2.', Object.getOwnPropertyDescriptor(person1, 'ageInNumber'))
console.log(
	'3.', // set: undefined
	Object.getOwnPropertyDescriptor(person1, 'name')
)
console.log(
	'4.', // get, set 모두 있음
	Object.getOwnPropertyDescriptor(person1, 'age')
)
// 모든 프로퍼티의 어트리뷰트 객체로 묶어 반환
console.log(Object.getOwnPropertyDescriptors(person1))

// 2. defineProperty, defineProperties
// 객체의 프로퍼티를 정의
const person2 = {}
// 한 프로퍼티씩 각각 설정
Object.defineProperty(person2, 'fullName', {
	value: '홍길동',
	writable: true,
	// 💡 누락한 어트리뷰트는 기본값으로 자동생성
})
Object.defineProperty(person2, 'name', {
	get() {
		return this.fullName
			.split('')
			.map((letter, idx) => (idx === 0 ? letter : '*'))
			.join('')
	},
})
console.log(person2, person2.name)
console.log(
	// ⚠️ 누락된 어트리뷰트들 확인해볼 것
	Object.getOwnPropertyDescriptors(person2)
)
// 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
// 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
Object.defineProperties(person2, {
	ageInNumber: {
		value: 25,
		writable: true,
	},
	age: {
		get() {
			return this.ageInNumber + '세'
		},
		set(age) {
			this.ageInNumber = Number(age)
		},
	},
})

person2.age = 30

console.log(person2, person2.age)
console.log(Object.getOwnPropertyDescriptors(person2))

// IV. 깊은 동결 (deep freeze)
// 재귀적으로 객체를 가장 깊숙히까지 동결
// MDN 문서의 deepFreeze 예시와는 달리, 주어진 인자 자체를 변형하지 않도록
function getDeepFrozen(obj) {
	console.log(obj)

	const result = {}
	const propNames = Object.getOwnPropertyNames(obj)

	for (const name of propNames) {
		const value = obj[name]

		result[name] = value && typeof value === 'object' ? getDeepFrozen(value) : value
	}
	return Object.freeze(result)
}
let myObj = {
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
// 여러 번 실행해 볼 것
myObj.a++
myObj.b.c++
myObj.b.d.e++
myObj.b.d.f.g++
console.log(myObj)
// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것
myObj = getDeepFrozen(myObj)
