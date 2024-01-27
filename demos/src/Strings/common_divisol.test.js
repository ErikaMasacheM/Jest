const common_divisor = require('./common_divisol');

test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.gcd(6, 3)).toBe(3);
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.largestCommonDivisor("ABCABC", "ABC")).toBe("ABC");
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.largestCommonDivisor("ABABAB", "ABAB")).toBe("AB");
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.largestCommonDivisor("CODECODECODE", "CODECODE")).toBe("CODE");
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
 })

 test('encontrar el maximo comun divisor', () => { 
    expect(common_divisor.gcdOfStrings("CODECODECODE", "CODECODE")).toBe("CODE");
 })
