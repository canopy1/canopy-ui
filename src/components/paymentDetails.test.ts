import PaymentDetails from "@uiComponent/paymentDetails";

describe("components/paymentDetails", () => {
  // beforeEach(() => {});

  // afterEach(() => {});

  it("two plus two is four", () => {
    const details = new PaymentDetails();
    expect(details.add(2, 2)).toBe(4);
  });
});
