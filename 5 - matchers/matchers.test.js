test("testing matchers", () => {
  expect(null).toBeNull();
  expect(null).toBeDefined();
  expect(undefined).toBeUndefined();
  expect(true).toBeTruthy();
  expect(1).toBeTruthy(); //1 en js se considera true y 0 false
  expect("a").toBeTruthy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();

  expect(3).toBeGreaterThan(1);
  expect(1).toBeLessThanOrEqual(3);
  expect(NaN).toBeNaN();

  expect([1, 2]).toContain(1); //toContain se puede usar en cadenas o arrays
  expect([1, 2]).toContainEqual(1); //toContainEquals es para arrays

  expect(1).toBe(1); //funciona al ser un dato simple en vez de un objeto
  expect(1).toEqual(1);

  expect({}).toEqual({}); //compara valor
  expect({}).not.toBe({}); //al ser objetos tienen diferente referencia
  expect({ a: "1" }).toEqual({ a: "1" }); //equal solo compara valor no referencia
  expect({ a: "1", b: undefined }).toEqual({ a: "1" }); //verifica valor
  expect({ a: "1", b: undefined }).not.toStrictEqual({ a: "1" }); //verifica valor y tipo de objeto

  expect({ a: "1" }).toHaveProperty("a"); //comprueba si existe la propiedad a
  expect({ a: "1" }).toHaveProperty("a", "1"); //comprueba si exite la propiedad a con el valor a
  //compara el valor de la propiedad igual que equal

  //para poder probar un metodo que lanza una excepcion hay que definir una función
  //evita que el código se ejecute antes de llegar a la asercion
  expect(() => {
    throw new Error("fail");
  }).toThrow(new EvalError("fail"));

  expect(() => {
    throw new Error("fail");
  }).toThrowError(new Error("fail"));

  expect(() => {
    throw new Error("fail");
  }).not.toThrowError(new Error());

  expect(1).toEqual(expect.anything()); //espera que sea cualquier cosa que no sea null o undefined
  expect(null).not.toEqual(expect.anything());
  expect(1).toEqual(expect.any(Number)); //espera que sea cualquier numero
  expect(1).not.toEqual(expect.any(String)); //espera que no sea un String

  expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2])); //espera un array que contenga 1 y 2
  expect("patata").toEqual(expect.stringContaining("tata")); //espera una cadena que contenga tata
});
