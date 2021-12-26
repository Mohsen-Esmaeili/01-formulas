import { PI } from './pi';

describe('PI', () =>
{
  it('Constructor', () =>
  {
    // arrange
    const node = new PI();

    // check
    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new PI();

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new PI();

    // check
    expect(node.getString()).toEqual('PI');
  });

  it('Should have correct value', () =>
  {
    // arrange
    const node = new PI();

    //check
    expect(node.getValue()).toEqual(Math.PI);
  });
});
