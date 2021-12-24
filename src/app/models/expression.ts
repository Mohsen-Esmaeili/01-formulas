import { NodeType } from "../constants/node-type";

export class Expression
{
  id: number;
  nodeType?: NodeType | undefined;
  icon?: string | undefined;
  title: string;
  children: Array<Expression> = [];
}
