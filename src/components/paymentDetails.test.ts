import { PaymentDetails } from "./paymentDetails";

describe("components/paymentDetails", () => {
  // beforeEach(() => {});

  // afterEach(() => {});

  it("should contain name", () => {
    const details = new PaymentDetails();
    expect(details.name).toBe("Dave Arel");
  });
});
