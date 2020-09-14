import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

// test("should generate set start date action object", () => {
//   const action = setStartDate(moment(0));
//   expect(action).toEqual({
//     type: "SET_START_DATE",
//     startDate: moment(0),
//   });
// });

// test("should generate set end date", () => {
//   const action = setEndDate(moment(0));
//   expect(action).toEqual({
//     type: "SET_END_DATE",
//     startDate: moment(0),
//   });
// });

test("should set text filter", () => {
  const action = setTextFilter("Some random text");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Some random text",
  });
});

test("should set sort by amount", () => {
  const action = sortByAmount("");
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should set sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});
