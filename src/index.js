module.exports = function reverse(n) {
	let arr = Array.from(String(n));
    return +arr.reverse().join('')
}
