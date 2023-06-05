// 날짜와 시간 관련 기능들을 제공하는 빌트인 객체

// I. 생성자 함수
// 1. 현재 날짜와 시간
const now = new Date()
console.log(typeof now)
console.log(now)

const nowStr = Date()
console.log(typeof nowStr)
console.log(nowStr)
// new와 함께 사용하면 인스턴스 객체
// 없이 사용하면 문자열 반환 - new Date().toString()과 같음

// 2. 밀리초 기준
// 1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간
// 이 강의에서의 자정은 해당 일 0시 0분 0초 의미
console.log(new Date(0))
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 30))

// 3. 단위별 숫자 입력
// 연, 월(0부터 시작) 필수
// 일, 시, 분, 초, 밀리초 옵션 (없을 시 0)
console.log(new Date(2022, 8))
console.log(new Date(2022, 8, 20, 14, 35))
console.log(new Date(2022, 8, 20, 14, 35, 47, 789))

// 4. dateString
// 특정 형식의 문자열 인식 기능
// 동작이 일관적이지 못함, 브라우저마다 차이 존재 - 권장하지 않음
console.log(new Date('August 20, 2022 14:35:47'))
console.log(new Date('2022-08-20T14:35:47'))

// II. 정적 메서드
// 1. now
// 현재의 밀리초 숫자값(앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
console.log(Date.now())

// 2. parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 dateString, UTC는 단위별 숫자를 받음
console.log(Date.parse('August 20, 2022 00:00:00 UTC'))
console.log(
	// 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
	Date.parse('August 20, 2022 09:00:00')
)
console.log(
	// ⭐️ 월은 0부터 시작
	Date.UTC(2022, 7, 20, 0, 0, 0)
)

// III. 인스턴스 메서드
// 1. toString, toDateString, toTimeString
// 각각 전체, 날짜만, 시간만 나타내는 문자열 출력
// 시스템(컴퓨터)의 언어 설정별로 다르게 나타남
const now2 = new Date()
console.log(now2.toString())
console.log(now2.toDateString())
console.log(now2.toTimeString())

// 2. toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용
const now3 = new Date()
console.log(now3.toString())
console.log(now.toLocaleString())
console.log(now.toLocaleString('ko-KR'))
console.log(now.toLocaleString('en-US'))
console.log(now.toLocaleString('de-DE'))

// 3. 단위별 setter, getter 메서드들
const now4 = new Date()
console.log(now4.toString())
for (i of [
	['연:', now4.getFullYear()],
	['월:', now4.getMonth()], // 0 ~ 11
	['일:', now4.getDate()],
	['요일:', now4.getDay()], // 0부터 일월화수목금토
	['시:', now4.getHours()],
	['분:', now4.getMinutes()],
	['초:', now4.getSeconds()],
	['밀리초:', now4.getMilliseconds()],
]) {
	console.log(i[0], i[1])
}
const now5 = new Date()
console.log(now5.toString())
now5.setFullYear(2022)
now5.setMonth(7)
now5.setDate(20)
// 💡 요일은 setter가 없음
now5.setHours(14)
now5.setMinutes(35)
now5.setSeconds(47)
now5.setMilliseconds(789)

console.log(now5.toString())

// 4. getTime, setTime
// 밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20)
const date1value = date1.getTime()
console.log(date1.toString())
console.log(date1value)

const date2 = new Date()
console.log(date2.toString())
date2.setTime(date1value)
console.log(date2.toString())

// 5. getTimezoneOffset
// 시스템의 시간대와 UTC의 시간차를 분 단위로 변환
// 한국의 경우 9시간 차이
console.log(new Date().getTimezoneOffset() / 60)

// 6. toISOString
// ISO8061이란 형식의 문자열 반환
// UTC 기준으로 반환
