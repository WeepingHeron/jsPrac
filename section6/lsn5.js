// 수학에 관련된 기능을 가진 빌트인 객체
// 정적 프로퍼티와 메서드만 제공
// Number 타입만 지원 - BigInt 사용 불가

// I. 주요 정적 프로퍼티
// PI - 원주율
// E - 자연로그의 밑

// II. 주요 정적 메서드
// 1. abs - 절대값 반환

// 2. ceil(올림), round(반올림), floor(내림), trunc(정수부만)

// 3. pow - ~로 거듭제곱
console.log(
	Math.pow(4, 2), // 4 ** 2
	Math.pow(4, 1), // 4 ** 1
	Math.pow(4, 0), // 4 ** 0
	Math.pow(4, -1) // 4 ** -1
)
// ** 연산자로 더 간결히 표현 가능
// NaN 반환
console.log(Math.pow(4))
// 두 숫자 인자 필요

// 4. sqrt - 제곱근

// 5. max, min - 인자들 중 최대값과 최소값

// 6. random - 0~1 사이의 무작위 값
// 안전한 (균일하고 예측 불가한) 난수 생성은 아님!
// 보안에 간련된 것이라면 전용 라이브러리 또는 아래 링크의 방식을 쓸 것
// Crypto.getRandomValues 메서드

// 7. sin, cos, tan, asin, acos, atan
// 사인, 코사인, 탄젠트, 아크사인, 아크코사인, 아크탄젠트
