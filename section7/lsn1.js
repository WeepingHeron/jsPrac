// 자바스크립트 배열의 특징과 생성

// I. 자바스크립트의 배열은 다르다

// 다른 언어들의 배열 (전형적인 배열)
// 한 배열에는 같은 자료형의 데이터만 포함 가능
// 데이터의 메모리 주소가 연속으로 나열됨
// 접근은 빠름, 중간요소의 추가나 제거는 느림

// 자바스크립트의 배열
// 배열의 형태와 동작을 흉내내는 특수 객체
// 한 배열에 다양한 자료형의 뎅이터가 들어갈 수 있음
// 연속나열이 아님 - 엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도...
// 접근은 상대적으로 느림 (일반 객체보다는 빠름), 중간 요소의 추가나 제거는 빠름
// 특정 자료형 전용 배열도 있음 - 더 빠름

// II. 배열 생성 방법들

// 1. 배열 리터럴
const arr1 = [] // 빈 배열
const arr2 = [1, 2, 3]
const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1)
console.log(arr2.length, arr2)
console.log(arr3.length, arr3)

// 2. 생성자 함수
// 표준 빌트인 객체들 중 하나
const arr = new Array()

console.log(arr)
console.log(arr.length)
// 인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성 (접근 시 undefined)
// 인자가 숫자가 아니거나 둘 이상이라면 해당 값들로 배열 생성

// 3. 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr4 = Array.of(3)

const arr5 = Array.of(1, 2, 3)
const arr6 = Array.of('ABC', true, null)

console.log(arr4)
console.log(arr5)
console.log(arr6)

// 4. 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환
const arr7 = Array.from([1, 2, 3])
const arr8 = Array.from('ABCDE')
const arr9 = Array.from({
	0: true,
	1: false,
	2: null,
	length: 3,
})

console.log(arr7)
console.log(arr8)
console.log(arr9)
// 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체
// 이후 배울 Map, Set 등의 이터러블로부터도 배열 생성 가능
// Array.from은 얕은 복사 - 1단계 깊이만 복사
// 두 번째 인자: 매핑 함수
// 매핑(mapping): 각 요소가 특정 알고리즘을 거쳐 새 값으로 반환됨
// 곧 배울 인스턴스 메서드 map이 보다 자주 사용됨
