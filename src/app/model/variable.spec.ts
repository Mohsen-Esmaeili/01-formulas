import { Variable } from './variable';

describe('Variable', () =>
{
  it('Constructor', () =>
  {
    const node = new Variable("$a");

    expect(node).not.toBeNull();
  });
});
