import { PaymentDetails } from "./payment_details";

describe("components/payment_details", () => {
  // beforeEach(() => {});

  // afterEach(() => {});

  it("should contain name", () => {
    const details = new PaymentDetails();
    expect(details.name).toBe("Dave Arel");
  });
});
