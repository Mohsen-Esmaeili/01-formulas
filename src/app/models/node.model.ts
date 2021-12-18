export class NodeModel
{
  public id: string = Guid.newGuid();
  public type: string = "";
  public name: string = "";
  public value: number = 0;
  public arguments: Array<NodeModel> = [];
  public power: NodeModel = new NodeModel();
  public expression: NodeModel = new NodeModel();
  public left: NodeModel = new NodeModel();
  public right: NodeModel = new NodeModel();
}

export class Guid
{
  static newGuid()
  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

