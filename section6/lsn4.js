// I. 생성자 함수
const numObj1 = new Number()
const numObj2 = new Number(123)
const numObj3 = new Number(-123.45)
console.log(numObj1, numObj2, numObj3)
console.log(numObj1.valueOf(), numObj2.valueOf(), numObj3.valueOf())
// 인자가 없을 시 0

// 특정 숫자값으로 인식되는 것
console.log(new Number('-123.4567'), new Number('Infinity'), new Number(true), new Number(false))
// NaN
console.log(new Number('1/2'), new Number('123ABC'), new Number('ABC'), new Number('{a: 1, b: 2}'), new Number([1, 2, 3]))
// 생성자로서가 아닌 Number 함수는 주어진 인자를 숫자로 변환하여 반환

// II. 정적 프로퍼티
// 1. EPSILON
// (Number형에서 표현 가능한 1보다 큰 가장 작은 수) - 1
// 부동소수점으로 인한 계산오차 문제 해결에 사용

// 2. MAX_VALUE, MIN_VALUE
// 자바스크립트에서 표현 가능한 가장 큰 수와 작은 수

// 3. MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
// 자바스크립트의 부동소수점 체계에서 안정적으로 나타낼 수 있는 가장 큰 수와 작은 정수
// 더 큰 정수도 표현 자체는 가능 (안전하게 하려면 BigInt 타입으로)

// 4. POSITIVE_INFINITY, NEGATIVE_INFINITY
// 양과 음의 Infinity

// 5. NaN
// 전역 객체(globalThis)의 NaN과 같은 값

// III. 정적 메서드
// 1. 전역 객체에도 있는 메서드들
// a. 동일하지 않음: isFinite, isNaN
// 전역 객체의 해당 메소드와의 차이: 암묵적 타입 변환을 하지 않음
// b. 동일함: parseInt, parseFloat
// 각각 전역의 동명 메서드들을 가리킴

// 2. (안전한) 정수 여부 확인 - isInteger, isSafeInteger

// IV. 인스턴스 메서드
// 값 자체에서 호출 시 괄호로 감쌀 것 (소수점과 구분 불가하므로)
// 1. toExponential
// 지수 표기법으로 나타내는 문자열을 반환

// 2. toFixed
// 최대 인자값으로 주어진 정수 (0~20)만큼 소수점 이하를 반올림하여 문자열로 반환

// 3. toPrecision
// 반올림과 지수 표기법을 사용하여 문자열 반환

// 4. toString
// 문자열 값 반환
// 인자 2~36가 주어지면 해당 수의 진수로 표현
