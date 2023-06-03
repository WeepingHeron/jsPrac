// I. 생성자 함수로 객체 만들기
// 생성자 함수
function YalcoChicken(name, no) {
	this.name = name
	this.no = no
	this.introduce = function () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
	}
}
// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3)
const chain2 = new YalcoChicken('강남', 17)
const chain3 = new YalcoChicken('제주', 24)
console.log(chain1, chain1.introduce())
console.log(chain2, chain2.introduce())
console.log(chain3, chain3.introduce())
// 생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 instance라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정릐
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능
// new를 붙이지 않으면 undefinded 반환

// II. 생성자 함수로 만들어진 객체
// 1. prototype - 자바스크립트 객체지향의 중심
function YalcoChicken2(name, no) {
	this.name = name
	this.no = no
	this.introduce = function () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
	}
}

const chain4 = new YalcoChicken2('판교', 3)
console.log(chain4)
// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken2.prototype.introEng = function () {
	return `Welcome to Yalco Chicken at ${this.name}!`
}
console.log(chain4.introEng())
console.log(new YalcoChicken2('강남', 17).introEng())
// 타 언어의 클래스와는 다르며 사용하기에 따라 더 강력함
// 사실 introduce와 introEng은 종류가 다름 (인스턴스 vs 프로토타입)

// 2. 타 방식으로 만든 객체와의 차이
function YalcoChicken3(name, no) {
	this.name = name
	this.no = no
	this.introduce = function () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
	}
}

function createYalcoChicken(name, no) {
	return {
		name,
		no,
		introduce() {
			return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
		},
	}
}
// 객체 리터럴
const chain5 = {
	name: '판교',
	no: 3,
	introduce: function () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
	},
}

// 객체 반환 함수
const chain6 = createYalcoChicken('강남', 17)

// 생성자 함수
const chain7 = new YalcoChicken3('제주', 24)
console.log(chain5, chain5 instanceof YalcoChicken3)
console.log(chain6, chain6 instanceof YalcoChicken3)
console.log(chain7, chain7 instanceof YalcoChicken3)

// 객체 자체의 로그도 상세가 다름 유의 (앞에 생성자 함수명이 붙음)
// instanceOf: 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
// 프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부

// 3. 생성자 함수 자체의 프로퍼티와 함수
function YalcoChicken4(name, no) {
	this.name = name
	this.no = no
	this.introduce = function () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
	}
}

// 본사의 정보와 업무
YalcoChicken4.brand = '얄코치킨'
YalcoChicken4.contact = function () {
	return `${this.brand}입니다. 무엇을 도와드릴까요?`
}

const chain8 = new YalcoChicken4('판교', 3)
console.log(YalcoChicken4.contact())
// console.log(chain8.contact())
