export class NodeModel
{
  public type: string = "";
  public name: string = "";
  public value: number = 0;
  public power: NodeModel = new NodeModel();
  public expression: NodeModel = new NodeModel();
  public left: NodeModel = new NodeModel();
  public right: NodeModel = new NodeModel();
}

