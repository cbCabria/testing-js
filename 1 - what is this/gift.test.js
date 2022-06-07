const gift = require('./gift');

test('what is this gift?', () => {
    expect(gift(1)).toBeNull();
    expect(gift(2)).toBeNull();
    expect(gift(3)).toBe(' *\n***\n *\n');
    expect(gift(4)).toBeNull();
    expect(gift(5)).toEqual('  *\n ***\n*****\n ***\n  *\n');
})





//toBE comprueba valor por referencia
//toEqual/toStrictEqual
//toBeGreaterThan/toBeLessThanOrEqual
//toBeNull/toBeTruthy