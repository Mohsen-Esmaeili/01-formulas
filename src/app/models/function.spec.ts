import { Function } from './function';
import { Value } from './value';

describe('Function', () =>
{
  it('Constructor', () =>
  {
    // arrange
    const node = new Function("Test name", [new Value(5)]);

    // check
    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const name = "Test name";
    const node = new Function(name, [new Value(5)]);

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const name = "Test name";
    const node = new Function(name, [new Value(5)]);

    // check
    expect(node.getString()).toEqual(`${ name }(5)`);
  });

  it('Should have correct value', () =>
  {
    // arrange
    const name = "SQRT";
    const node = new Function(name, [new Value(9)]);

    //check
    expect(node.getValue()).toEqual(Math.sqrt(9));
  });
});
