// && : 앞의 것이 false면 뒤의 것을 평가할 필요 없음
// || : 앞의 것이 true면 뒤의 것을 평가할 필요 없음
// 평가는 곧 실행 - 이 점을 이용한 간결한 코드
// 💡 연산 부하가 적은 코드를 앞에 - 리소스 절약

let error = true
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!')

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.')

let x = true
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc'
let z = x || 123

console.log(y, z)

// truthy
console.log(1.23 ? true : false, -999 ? true : false, '0' ? true : false, ' ' ? true : false, Infinity ? true : false, -Infinity ? true : false, {} ? true : false, [] ? true : false)
// ⚠️ true와 `같다`는 의미는 아님
console.log(1.23 == true, ' ' == true, {} == true)

// falsy
console.log(0 ? true : false, -0 ? true : false, '' ? true : false, null ? true : false, undefined ? true : false, NaN ? true : false)
// 💡 어떤 값들은 false로 타입변환됨
console.log(0 == false, 0 === false, '' == false, '' === false)
console.log(null == false, undefined == false, NaN == false)
let a = 0
let b = 1
a && a++
b && b++
console.log(a, b)
let c = 2
let d = 3
console.log(c % 2 ? '홀' : '짝', d % 2 ? '홀' : '짝')
let e = ''
let f = '회사원'
let g = e || f
console.log(g)
e = e || '단기알바'
f = f || '단기알바'
console.log(e, f)

// boolean으로 직접 변환
// 한 번 부정
console.log(!1, !-999, !'hello', !0, !'', !null)
// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(!!1, !!-999, !!'hello', !!0, !!'', !!null)
let n = 123
console.log('n는 홀수인가?', !!(n % 2))
