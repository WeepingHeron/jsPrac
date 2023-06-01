// while
// 조건이 참인 동안 반복수행
let x = 0
while (x < 10) {
	console.log(x++)
}

// break문을 통한 무한반복 탈출
let y = 0
while (true) {
	if (y++ >= 5) break // 😎
	console.log(y)
}
// 1 ~ 5 출력

let z = 0
while (z < 14) {
	const zNow = z++
	if (zNow % 2 === 0) continue
	if (zNow > 7) break
	console.log(zNow)
}
