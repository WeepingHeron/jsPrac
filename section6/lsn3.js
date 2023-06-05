// I. 생성자 함수
const strObj1 = new String()
const strObj2 = new String('Hello World!')

console.log(strObj1)
console.log(strObj2)
console.log(strObj1.valueOf(), strObj1.toString())
console.log(strObj2.valueOf(), strObj2.toString())
// valueOf 또는 toString 메서드로 문자열 원시값 반환

const fromNum = new String(123)
const fromBool = new String(true)
const fromArr = new String([1, 'A', false])
const fromObj = new String({ a: 1 })

console.log(typeof fromNum, fromNum)
console.log(typeof fromBool, fromBool)
console.log(typeof fromArr, fromArr)
console.log(typeof fromObj, fromObj)
// 다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환

// 생성자로서가 아닌 String 함수는 주어진 인자르 ㄹ문자열로 변환하여 반환

// II. 유사 배열 객체
let myStr = '안녕하세요!'

console.log(myStr.length, myStr[0], myStr[myStr.length - 1])
myStr[myStr.length - 1] = '?'
console.log(myStr) // 💡 배열과 달리 그대로
for (const letter of myStr) {
	console.log(letter)
}
// length 프로퍼티: 글자 수 반환
// [] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능
// for ... of 문 사용 가능 (이후 배울 이터러블이기 때문)

// String은 원시값
// [] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야...

// III. 주요 인스턴스 메서드
// 1. toUpperCase, toLowerCase
// 라틴어 문자를 모두 대문자/소문자로 변경하여 반환
// 기존의 문자열은 바꾸지 않음 (다음의 메서드들 모두 마찬가지)

// 2. charAt, at
// 인자로 주어진 인덱스의 문자 반환
// at - 신기능, 배열에서도 사용, 음수로 뒤에서부터 접근 가능(-1부터)

// 3. indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환

// 4. includes, startsWith, endsWith
// 인자로 주어진 문자열 포함 (아무 곳에 / 맨 앞에 / 맨 끝에) 여부 불리언으로 반환

// 5. search
// 인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환

// 6. substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

// 7. slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음

// 8. split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
// 두 번째 인자로 배열의 최대 길이 지정 가능

// 9. trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환
// 중간의 공백은 제거하지 않음

// 10. repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환
// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생

// 11. replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
// replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
// 모두 치환하려면 정규식 /.../g 사용
// replaceAll은 문자열도 자동으로 /.../g처럼 인식

// 메서드 체이닝 (method chaining)
// 값을 반환하는 인스턴스 메서드를 연속으로 사용
const word = ' 모두 HELLO! '
const rpFrom = 'hello'
const rpTo = 'bye'

console.log(
	word
		.trimStart() // '모두 HELLO! '
		.toLowerCase() // '모두 hello! '
		.replaceAll(rpFrom, rpTo) // '모두 bye! '
		.toUpperCase() // '모두 BYE! '
		.repeat(3) // '모두 BYE! 모두 BYE! 모두 BYE! '
		.trimEnd() // '모두 BYE! 모두 BYE! 모두 BYE!'
)
console.log(word) // 원본은 그대로
