import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("shouldsetup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expenseaction object", () => {
  const action = editExpense("123abc", { note: "New note added" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note added",
    },
  });
});

test("should setup add expense action object", () => {
  const action = addExpense({
    id: "123abc",
    description: "hello",
    note: "my note",
    amount: 20,
    createdAt: 100,
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: "123abc",
      description: "hello",
      note: "my note",
      amount: 20,
      createdAt: 100,
    },
  });
});
