import { E } from './e';

describe('E', () =>
{
  it('Constructor', () =>
  {
    // arrange
    const node = new E();

    // check
    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new E();

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new E();

    // check
    expect(node.string).toEqual('E');
  });

  it('Should have correct value', () =>
  {
    // arrange
    const node = new E();

    //check
    expect(node.result).toEqual(Math.E);
  });
});
