// 고차함수 메서드들

// 배열의 고차함수(higher order function) 메서드
// 다른 함수(콜백 함수)를 인자로 받음
// 함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// for문의 좋은 대체재
// 단점: 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg - this 주제 섹션에서 다룰 것

const arr = [1, 2, 3, 4, 5]
// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {
	// 💡 세 번째 인자는 원본 배열의 참조임
	arr[idx]++
	console.log(itm)
})

// 2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg

const orgArr = [1, 2, 3, 4, 5]

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr1 = orgArr.map((i) => i + 1)
const arr2 = orgArr.map((i) => i * i)
const arr3 = orgArr.map((i) => (i % 2 ? '홀수' : '짝수'))

// 3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 인덱스 반환

// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg
const arr4 = [1, 2, '삼', 4, 5, 6, '칠', 8, 9]
const isString = (i) => typeof i === 'string'
const isBoolean = (i) => typeof i === 'boolean'
console.log(arr4.find(isString), arr4.findLast(isString), arr4.findIndex(isString), arr4.findLastIndex(isString))

// 4. some, every - 어떤 / 모든 요소가 기준을 충족하는지 확인
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
	arr5.some((i) => i % 2),
	arr5.every((i) => i % 2),
	arr5.some((i) => i < 0),
	arr5.every((i) => i < 10)
)

// 5. filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
// 원본 배열을 수정하지 않음
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const odds = arr6.filter((i) => i % 2)
const evens = arr6.filter((i) => !(i % 2))
const largerThan3 = arr6.filter((i) => i > 3)
console.log(odds)
console.log(evens)
console.log(largerThan3)

// 6. reduce, reduceRight
// 주어진 콜백함수에 따라 값들을 접어 나감
// 콜백함수 - 인자: (이전값, 현재값, 현재 인덱스, 해당 배열)
// 초기화 값
const arr7 = ['가', '나', '다', '라', '마', '바', '사']
console.log(
	arr7.reduce((prev, curr, idx) => {
		console.log(`p: ${prev}, c: ${curr}, i: ${idx}`)
		return prev + curr
	})
)
console.log(
	arr7.reduceRight((prev, curr, idx) => {
		console.log(`p: ${prev}, c: ${curr}, i: ${idx}`)
		return prev + curr
	})
)
// 만약 위 기능을 배열 메서드와 체이닝 없이 짰다면?
// 중간 과정을 저장하기 위한 변수 또는 내용이 바뀌는 참조형 데이터들이 사용되었을 것
// 함수형 프로그래밍 - 변수들을 코드에서 감추어 부수효과로 인한 문제 방지

// 7. sort - 배열을 (주어진 기준대로) 정렬
// 배열 자체의 순서를 바꿈 - 원본 수정
// 해당 배열을 반환
// 콜백함수(필수 아님) - 인자: (앞의 값, 뒤의 값)
// 정확한 정렬을 위해 - 콜백 함수 사용
// 두 인자 a와 b: 인접한 두 요소
// 0보다 큰 값 반환: b를 앞으로 - 순서 뒤집음
// 0반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
// 0보다 작은 값 반환: a를 앞으로 - 사실상 순서 유지

// 8. flatMap - map한 다음 flat(매핑해서 펼침)
// 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// thisArg
const arr8 = [1, 2, 3, 4, 5]

// 💡 한 단계만 펼침
console.log(arr8.flatMap((i) => [i, [i], [[i]]]))
