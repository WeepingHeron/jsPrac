// 2, 8, 16진법과 비트 연산자

// I. 다른 진법들

// 2진법(binary)
// 0b뒤로 숫자 0, 1를 붙여 표현
;[0b1, 0b10, 0b11, 0b100, 0b101]
	.forEach((i) => console.log(i))
	[
		// console.log(
		//   0b2 // ⚠️ 토큰으로 인식 - 오류
		// );

		// 8진법(octal)
		// 0o뒤로 숫자 0~7를 붙여 표현
		(0o7, 0o10, 0o100, 0o1000)
	].forEach((i) => console.log(i))
	[
		// console.log(
		//   0o8 // ⚠️ 토큰으로 인식 - 오류
		// );

		// 16진법(hexadecimal)
		// 0x뒤로 숫자 0~9, A~F를 붙여 표현
		(0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0xffffff)
	].forEach((i) => console.log(i))

// 진법간 변환
const num = 123456789
const binStr = num.toString(2)
const octStr = num.toString(8)
const hexStr = num.toString(16)
console.log(binStr, octStr, hexStr)
console.log(parseInt(binStr, 2), parseInt(octStr, 8), parseInt(hexStr, 16))
// 이 외에도 2~36 사이의 진법 사용 가능 - toString과 parseInt의 가용 인자 범위

// II. 비트 연산자들
let x = 0b1010101010 // 682
let y = 0b1111100000 // 992
// 양쪽 모두 1인 자리에 1
const bitAnd = x & y
console.log(bitAnd)
console.log(bitAnd.toString(2))

// 한 쪽이라도 1인 자리에 1
const bitOr = x | y
console.log(bitOr)
console.log(bitOr.toString(2))

// 양쪽이 다른 자리에 1
const bitXor = x ^ y
console.log(bitXor)
console.log(bitXor.toString(2))

// 각 비트 반전
console.log(~x)
console.log((~x).toString(2))

console.log(~y)
console.log((~y).toString(2))

let z = 0b101 // 5
console.log(z.toString(2), z)

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
z = z << 1
console.log(z.toString(2), z)

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
z = z >> 1
console.log(z.toString(2), z)
