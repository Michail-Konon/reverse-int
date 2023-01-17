module.exports = function reverse(n) {
    if ( n < 0 ) {
  	n = (0 - n)
  }
    
	let arr = Array.from(String(n));
    return +arr.reverse().join('')
}
