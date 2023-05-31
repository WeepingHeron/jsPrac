// ?? - null 병합 연산자
// ||와 달리, falsy가 아닌 null 또는 undefined만 대체
let x
x ?? console.warn(x, 'x에 값이 없습니다.')

x = 0
x ?? console.warn(x, 'x에 값이 없습니다.')

x = null
x ?? console.warn(x, 'x에 값이 없습니다.')

let a = false
let b = 0
let c = ''
let d = null
let e

console.log(a ?? '기본값', b ?? '기본값', c ?? '기본값', d ?? '기본값', e ?? '기본값')

// 병합 할당 연산자들
let p = 0
let q = ''
let r = null

p ||= 100
q &&= '있어야 바뀜'
r ??= '기본값'
console.log(p, q, r)
