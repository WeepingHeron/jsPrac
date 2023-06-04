// I. 접근자 프로퍼티

// getter, setter 함수라고도 부름
// 스스로는 값을 갖지 않음 - 다른 프로퍼티의 값을 읽거나 저장할 때 사용
// get, set을 앞에 붙임
const person1 = {
	age: 17,

	get koreanAge() {
		return this.age + 1
	},

	set koreanAge(krAge) {
		this.age = krAge - 1
	},
}

// 클래스에서도 사용 가능
class YalcoChicken {
	constructor(name, no) {
		this.name = name
		this.no = no
	}
	get chainTitle() {
		return `${this.no}호 ${this.name}점`
	}
	set chainNo(chainNo) {
		if (typeof chainNo !== 'number') return
		if (chainNo <= 0) return
		this.no = chainNo
	}
}
// 클래스에서는 프로토타입이 됨 - 콘솔에서 객체의 [[Prototype]]에서 확인해 볼 것

// getter: 반드시 값을 반환해야 함, 특정 프로퍼티(들)를 원하는 방식으로 가공하여 내보낼 때 사용
// setter: setter는 하나의 인자를 받음, 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는 데 사용

// II. 은닉
// 캡슐화(encapsulation)
// 객체지향의 주요 요소 중 하나 - 객체 내부의 값을 감추는(은닉) 것
// 인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록
// JavaScript의 필드는 기본적으로 public(은닉되지 않음)

// private 필드를 통한 은닉
class Employee {
	#name = ''
	#age = 0
	constructor(name, age) {
		this.#name = name
		this.#age = age
	}
}

const emp1 = new Employee('김복동', 32)
// 필드명 앞에 #를 붙임
// 클래스 바로 안쪽에 정의해야 함 (constructor에만 하면 안 됨)

// 클래스 내에서는 private 필드에 접근 가능
class Employee2 {
	#name = ''
	#age = 0
	constructor(name, age) {
		this.#name = name
		this.#age = age
	}
	get name() {
		// [n]: n + 1 번째 글자를 반환
		return this.#name[0] + '모씨'
	}
	get age() {
		return this.#age - (this.#age % 10) + '대'
	}
	set age(age) {
		if (typeof age === 'number' && age > 0) {
			this.#age = age
		}
	}
	getOlder(years) {
		this.#age += years
	}
}

const emp2 = new Employee('김복동', 22)

// constructor, 접근자 프로퍼티 또는 기타 함수에서 접근 가능
// 인스턴스에서 바로 접근은 못하도록 은닉, 위 방법들로 제어
