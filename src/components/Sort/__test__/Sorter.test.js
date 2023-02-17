const sorter = require("../Sorter");

const product1 = { product: "Bed", price: "100" };
const product2 = { product: "Towel", price: "50" };
const product3 = { product: "Nightstand", price: "150" };

const list = [product1, product2, product3];

describe("Logic sort testing", () => {
  test("List is ordered by name", () => {
    const sortedList = sorter.sortListByName(list);
    expect(sortedList[0]).toBe(product1);
    expect(sortedList[1]).toBe(product3);
    expect(sortedList[2]).toBe(product2);
  });

  test("List is ordered by price", () => {
    const sortedList = sorter.sortListByPrice(list);
    expect(sortedList[0]).toBe(product2);
    expect(sortedList[1]).toBe(product1);
    expect(sortedList[2]).toBe(product3);
  });
});
