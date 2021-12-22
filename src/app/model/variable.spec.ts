import { Variable } from './variable';

describe('Variable', () =>
{
  it('Constructor', () =>
  {
    // arrange
    const node = new Variable("$a");

    // check
    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Variable("$c");

    // check
    expect(node.id).not.toBeNull();
  });

  it('Should have correct name', () =>
  {
    // arrange
    const nodeName = "$b";
    const node = new Variable(nodeName);

    // check
    expect(node.name).toEqual(nodeName);
  });
});
