import {sum} from "./sum";

describe ('sum operations', function (){

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('title', () => {
    var ope1=5;
    var ope2=2;
    var operacion=sum(ope1,ope2);

    expect(operacion).toEqual(7);
})
})

//it y test son equivalentes