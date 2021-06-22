import * from "@canopyinc/ui-core";

describe("#ui-core", () => {
  it('provides lit functionality', async () => {
    expect(ifDefined).not.toBeUndefined()
    expect(repeat).not.toBeUndefined()
    expect(classMap).not.toBeUndefined()
    expect(styleMap).not.toBeUndefined()
    expect(until).not.toBeUndefined()
    expect(live).not.toBeUndefined()
  });
});
