const body = document.getElementById('body')
const block = document.getElementById('block')

setInterval(() => {
	body.style.backgroundColor = getRandomColor()
	block.style.backgroundColor = getRandomColor()
	block.style.color = getRandomColor()
	block.style.transform = `translateY(${Math.floor(Math.random()* 650)}px) translateX(${Math.floor(Math.random()* 1050)}px)`

}, 1500);
function getRandomColor() {
	let str = '0123456789ABCDEF'
	let color = '#'
	str = str.split('')
	let randomColor = []
	for (i = 0; i < 6; i++) {
		randomColor.push(str[Math.floor(Math.random()* str.length)])
	}
	randomColor = color + randomColor.join('')
	return randomColor
}

