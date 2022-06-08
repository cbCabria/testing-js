const spock = require("./spock");

test("papel gana a piedra", () => {
  expect(spock("papel", "piedra")).toBe("papel");
});

test("tijeras gana a papel", () => {
  expect(spock("tijeras", "papel")).toBe("tijeras");
});

test("spock gana y pierde", () => {
  expect(spock("spock", "piedra")).toBe("spock");
  expect(spock("spock", "tijeras")).toBe("spock");
  expect(spock("spock", "lagarto")).toBe("lagarto");
  expect(spock("spock", "papel")).toBe("papel");
});
