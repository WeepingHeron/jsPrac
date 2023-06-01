// 권장되는 방식
// return문: 함수 실행을 완전히 종료

function evalNum() {
	const x = 21

	if (x % 2) {
		console.log('홀수입니다.')
		return
	}

	if (x % 4) {
		console.log('짝수입니다.')
		return
	}

	console.log('4의 배수입니다.')
}

evalNum()
console.log('블록문 바깥')

// else는 조건이 간단하지 않은 이상 가능한 사용하지 않을 것
