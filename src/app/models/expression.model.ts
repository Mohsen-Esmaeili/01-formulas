export class ExpressionModel
{
  public id: number;
  public title: string;
  public children: Array<ExpressionModel> = [];
}
