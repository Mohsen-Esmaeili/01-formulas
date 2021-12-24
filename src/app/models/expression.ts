export class Expression
{
  public id: number;
  public icon?: string | undefined;
  public title: string;
  public children: Array<Expression> = [];
}
