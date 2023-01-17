module.exports = function reverse(n) {
    if ( n < 0 ) {
  	return (0 - n)
  }
    
	let arr = Array.from(String(n));
    return +arr.reverse().join('')
}
