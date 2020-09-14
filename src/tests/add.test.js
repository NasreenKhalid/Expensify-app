const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
  //   if (result !== 7) {
  //     throw new Error(`You added 4 and3. The result was ${result}. expected:7`);
  //   }
});

test("should return name", () => {
  const result1 = generateGreeting("Mike");
  expect(result1).toBe(`Hello Mike!`);
});
