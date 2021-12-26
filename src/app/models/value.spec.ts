import { Value } from './value';

describe('Value', () =>
{
  it('Constructor', () =>
  {
    // arrange
    const node = new Value(7);

    // check
    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Value(5);

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new Value(7);

    // check
    expect(node.getString()).toEqual('7');
  });

  it('Should have correct value', () =>
  {
    // arrange
    const nodeValue = 9;
    const node = new Value(nodeValue);

    //check
    expect(node.getValue()).toEqual(nodeValue);
  });
});
