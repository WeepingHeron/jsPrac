// 배열의 기본 메서드들

// I. 특정 값을 반환하는 기본 메서드들

// 1. (정적) isArray - 배열인지 여부를 반환
console.log(Array.isArray([1, 2, 3]), Array.isArray('123'), Array.isArray('123'.split('')))
// Array.isArray가 instanceof Array보다 권장됨 (다른 프레임의 Array도 판별)

// 2. at - 주어진 인자를 인덱스로 값을 반환
// 음수를 사용하여 뒤에서부터 접근 가능
const arr = ['한놈', '두시기', '석삼', '너구리', '오징어']
console.log(arr.at(1), arr.at(2))

// 3. includes - 인자로 주어진 요소 유무 확인
const arr2 = [1, 2, 3, 'abc', true]
console.log(arr2.includes(2), arr2.includes('abc'), arr2.includes(true))

// 4. indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
// 없을 시 -1 반환
const arr3 = [1, 2, 3, 2, 1]
console.log(arr3.indexOf(2), arr3.lastIndexOf(2), arr3.indexOf(4))

// 5. join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr4 = ['a', 'b', 'c', 'd', 'e']
const arr5 = [1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]]
console.log(
	arr4.join() // 인자가 없다면 쉼표`,`로
)
console.log(arr4.join(''))
console.log(arr5.join(':'))

// II. 배열을 변경하는 기본 메서드들

// 1. push, unshift - 배열에 값을 추가
// 결과의 길이를 반환

// a. push - 값을 뒤에 추가
const arr6 = [1, 2, 3]
const x = arr6.push(4)
console.log(x, arr6)

// b. unshift - 값을 앞에 추가
const arr7 = [5, 6, 7]
const y = arr7.unshift(4)
console.log(y, arr7)

// 특징과 비교
// 수정된 배열의 길이를 반환
// 부수효과 - 원본 배열을 변경 (배열 마지막 강에 배울 스프레드 문법을 보다 권장)
// push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로

// 2. pop, shift - 배열에서 값을 제거하여 반환

// a. pop - 값을 뒤에서 제거하여 반환
const arr8 = [1, 2, 3, 4, 5]
const z = arr8.pop()
console.log(z, arr8)

// b. shift - 값을 앞에서 제거하여 반환
const arr9 = [1, 2, 3, 4, 5]
const w = arr9.shift()
console.log(w, arr9)
// pop보다 shift가 더 느림 - 이후 요소들을 당겨야 하므로

// 3. splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2개 이상의 인자를 받음
// start: 배열 변경을 시작할 위치
// deleteCount: 제거할 요소의 개수
// item(s): 추가할 하나 이상의 요소
const arr10 = [1, 2, 3, 4, 5, 6, 7]
// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr10.splice(1, 3, '가', '나', '다')
console.log(arr10)
// 배열의 delete - empty 값을 남김

// 4. fill - 배열을 특정 값으로 채움
// 중간의 빈 값도 채움
const arr11 = [1, 2, , , 4, 5]
// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr11.fill(3, 6, 9)
console.log('4.', arr11)

// 5. reverse - 배열의 순서를 뒤집음
const arr12 = [1, 2, 3, 4, 5, 6, 7]
console.log(arr12)
// 💡 메서드 자체도 뒤집힌 배열을 반환
arrRev = arr12.reverse()
// 원본 배열 뒤집힘
console.log(arr12, arrRev)

// III. 새 배열을 반환하는 기본 메서드들
// 원본 배열을 수정하지 않음
// 얕은 복사본

// 1. concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
const arr13 = [1, 2, 3]
const arr14 = ['a', 'b', 'c']
const arr15 = [true, false]
const arr16 = arr13.concat('ABC', arr14, arr15, 100)
console.log(arr16)
// 원본 배열들에는 변화 없음

// 2. slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음
// begin: 시작 위치
// end: 종료 위치
const arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr18 = arr17.slice(3)
const arr19 = arr17.slice(3, 7)
console.log(arr8, arr9)
// 원본에는 변화 없음

// 3. flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
const orgArr = [1, 2, [3, 4], [5, [6, [7, 8]]]]
// 인자가 없으면 1을 넣은 것과 같음
const arr20 = orgArr.flat()
const arr21 = orgArr.flat(1)
const arr22 = orgArr.flat(2)
const arr23 = orgArr.flat(3)
// 원본에는 변화 없음
