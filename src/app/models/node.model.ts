export class NodeModel
{
  public id: string = "";
  public type: string = "";
  public name: string = "";
  public value: number = 0;
  public arguments: Array<NodeModel> = [];
  public power: NodeModel | undefined;
  public expression: NodeModel | undefined;
  public left: NodeModel | undefined;
  public right: NodeModel | undefined;
}

