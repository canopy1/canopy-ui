import { AccountOverview } from "./account_overview";

describe("components/payment_details", () => {
  // beforeEach(() => {});

  // afterEach(() => {});

  it("should contain name", () => {
    const details = new AccountOverview();
    expect(details.name).toBe("Dave Arel");
  });
});
