// for문
// 괄호 안의 3개의 식에 따른 반복 수행
// 변수의 선언 및 할당, 종료조건(부재 시 항상 참), 참일 시 블록 안의 코드 이후 실행문

// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
	console.log(i)
}
for (let i = 0; i < 5; ) {
	console.log(i++)
}
for (let i = 10; i >= 0; i -= 2) {
	console.log(i)
}

// 중첩 사용
// 두 스택의 스코프가 쌓이는 것
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 9; j++) {
		console.log(`${i} * ${j} = ${i * j}`)
	}
}

// 둘 이상의 변수 사용
for (let x = 0, y = 10; x <= y; x++, y--) {
	console.log(x, y)
}
for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
	console.log(y, z)
}
