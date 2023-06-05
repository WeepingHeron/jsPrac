// I. 전역 객체 (global object)
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체

// 전역 객체에 포함되는 것
// 1. 표준 빌트인 객체
// 2. 호스트 객체 - 환경에서 제공하는 기타 객체들: 브라우저의 Web API, Node.js API 등
// 3. (브라우저 한정) - 전역으로 설정된 var변수와 전역 함수

// II. 표준 빌트인 객체 (standard built-in objects)
// ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis 등을 붙이지 않고 바로 사용 가능
// Node.js에서는 globalThis 출력 시 표준 빌트인 객체들은 출력하지 않음

// III. 래퍼 객체 (wrapper object)
const str = 'abcde'
console.log(str.length, str.toUpperCase(), str[0])
const num = 123.4567
console.log(typeof num.toString(), num.toFixed(2))
// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
// 원시값을 필요 시 래퍼 객체로 감싸서 (wrap) 그것의  instance로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생
// 해당 기능 사용 후에는 원시 객체로 돌아감 - 메모리 절약
// valueOf 함수 - 래퍼 객체의 instance에서 원시값 반환
const str2 = new String('abcde')
const num2 = new Number(123.4567)
const bool = new Boolean(true)

console.log(str2.valueOf())
console.log(num2.valueOf())
console.log(bool.valueOf())
