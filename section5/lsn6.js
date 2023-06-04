// I. 스프레드
// 1. 기본 문법
const class1 = {
	x: 1,
	y: 'A',
	z: true,
}

const class2 = { ...class1 }

// 아래의 참조복사 코드와 다름!
// const class2 = class1;

console.log(class2)

// 2. 특정 객체의 프로퍼티를 포함하는 다른 객체 생성에 유용
const class3 = {
	a: 1,
	b: 'A',
	c: true,
}
const class4 = {
	d: { x: 10, y: 100 },
	e: [1, 2, 3],
}
const class5 = {
	...class3,
	z: 0,
}
const class6 = {
	...class4,
	...class5,
	...class4.d,
}
console.log(class5)
console.log(class6)

// 3. 중복되는 프로퍼티는 뒤의 것이 덮어씀
const class7 = {
	...{ a: 1, b: 2 },
	...{ b: 3, c: 4, d: 5 },
	...{ c: 6, d: 7, e: 8 },
}

console.log(class7)

// 4. 복사의 깊이
const class8 = {
	x: 1,
	y: { a: 2 },
	z: [3, 4],
}

const class9 = { ...class8 }
class8.x++
class8.y.a++
class8.z[0]++
console.log(class8)
console.log(class9)
// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 - 얕은 복사
// 복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것

// II. destructuring
// 1. 문법
// 기존 코드
const obj1 = {
	x: 1,
	y: 2,
	z: 3,
}
const x = obj1.x
const y = obj1.y
const z = obj1.z
console.log(x, y, z)
// 디스트럭쳐링으로 간략화
const obj2 = {
	a: 1,
	b: 2,
	c: 3,
}
const { a, b, c } = obj2
console.log(a, b, c)
// 일부만 가져오는 것도 가능
const obj3 = {
	d: 1,
	e: 2,
	f: 3,
}
const { d, f } = obj3
console.log(d, f)

// 2. 활용
// 필요한 프로퍼티값을 짧은 코드로 변수/상수에 담을 때
const array1 = [1, 2, 3, 4, 5]

// const length = array1.length;
const { length } = array1

console.log(length)

// 함수 인자값의 가독성을 위해 객체를 사용할 때
// 디스트럭쳐링 (적절히 활용)
function introduce({ age, married, job, name }) {
	// 순서 무관
	// 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

	console.log(`제 이름은 ${name}, ` + `나이는 ${age}세구요. ` + `직업은 ${job}, ` + `${married ? '기혼' : '미혼'}입니다.`)
}

const person1 = {
	job: '개발자',
	age: 28,
	married: false,
	name: '김철수',
	blood: 'O',
}

introduce(person1)
