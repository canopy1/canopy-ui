import PaymentDetails from "./paymentDetails";

describe("components/paymentDetails", () => {
  // beforeEach(() => {});

  // afterEach(() => {});

  it("two plus two is four", () => {
    const details = new PaymentDetails();
    expect(details.add(2, 2)).toBe(4);
  });
});

// export {
//   // Use an empty export to please Babel's single file emit.
//   // https://github.com/Microsoft/TypeScript/issues/15230
// }
