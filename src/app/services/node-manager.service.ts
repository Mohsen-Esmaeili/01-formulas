import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { NewNodeConfigComponent } from '../components/formulizer/expression';
import { Addition } from '../models/addition';
import { Division } from '../models/division';
import { E } from '../models/e';
import { EmptyNode } from '../models/empty-node';
import { Expression } from '../models/expression';
import { Multiplication } from '../models/multiplication';
import { Node } from '../models/node';
import { Paren } from '../models/paren';
import { PI } from '../models/pi';
import { Power } from '../models/power';
import { Subtraction } from '../models/subtraction';
import { Value } from '../models/value';
import { Variable } from '../models/variable';
// @ts-ignore
import * as Parser from '../parser/formula-parser';
import { NodeType } from './../constants/node-type';
import { Function } from './../models/function';

const parse = Parser.parse;

@Injectable()
export class NodeManagerService implements OnDestroy
{
  // For detecting the selected node
  selectedEmitter = new Subject<string>();

  // When changing the formula we need to be aware the textarea and AST need to reload
  updatedEmitter = new EventEmitter();

  dialogSubscription: Subscription;

  constructor(private dialog: MatDialog) { }

  Load(formula: string): Node
  {
    const parserResult = parse(formula);

    // Creating data model based on generated Abstract Syntax Tree
    const root = this.regenerateNode(parserResult);

    return root;
  }

  private regenerateNode(node: any): Node
  {
    switch (node.type)
    {
      case NodeType.Number:
        return new Value(node.value);
      case NodeType.Variable:
        return new Variable(node.name);
      case NodeType.Addition:
        return new Addition(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Subtraction:
        return new Subtraction(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Multiplication:
        return new Multiplication(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Division:
        return new Division(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Power:
        return new Power(this.regenerateNode(node.expression), this.regenerateNode(node.power));
      case NodeType.Function:
        return new Function(node.name, node.arguments.map((arg: Node) => this.regenerateNode(arg)));
      case NodeType.Paren:
        return new Paren(this.regenerateNode(node.expression));
      case NodeType.PI:
        return new PI();
      case NodeType.E:
        return new E;

      default:
        throw new Error(`Invalid node type ${ node.type }`);
    }
  }

  public addNewNode(node: Paren, expression: Expression): void
  {
    /*
    Whenever you want to add new formula to existing formula should select position that you want to add new formula. for example, if you want to add a new subtraction
    to a addition expression, it's possible to add a new subtraction in the left or right side of the addition expression
    */
    const dialogRef = this.dialog.open(NewNodeConfigComponent, {
      hasBackdrop: true,
      data: {
        newNodeType: expression.nodeType,
        parentNodeType: node.expression.type
      }
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe((response: any) =>
    {
      if (expression.nodeType && response.isSelected)
      {
        this.addChild(node, expression, response.isInLeftSide, response.value);
      }
    });
  }

  private addChild(node: Paren, expression: Expression, isInLeftSide: boolean = true, requiredData: string = ""): void
  {
    const positionId = this.getPositionId(node.expression, isInLeftSide);

    const newNode = this.getNode(expression, requiredData);
    node.addChild(positionId, newNode);
    this.updatedEmitter.emit();
  }

  updateNode(parentNode: Node, expression: Expression, id: string): void
  {
    if (expression.nodeType !== NodeType.Number && expression.nodeType !== NodeType.Variable && expression.nodeType !== NodeType.Function)
    {
      this.updateNodeCore(parentNode, expression, id, undefined);
      return;
    }
    const dialogRef = this.dialog.open(NewNodeConfigComponent, {
      hasBackdrop: true,
      data: {
        newNodeType: expression.nodeType,
        parentNodeType: parentNode.type,
        positionId: id
      }
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe((response: any) =>
    {
      if (expression.nodeType && response.isSelected)
      {
        this.updateNodeCore(parentNode, expression, id, response.value);
      }
    });
  }

  private updateNodeCore(parentNode: Node, expression: Expression, id: string, value: string | undefined): void
  {
    const newNode = this.getNode(expression, value);
    parentNode.updateNode(id, newNode);
    this.updatedEmitter.emit();
  }

  changeNode(parentNode: Node, newNode: Node, id: string): void
  {
    parentNode.updateNode(id, newNode);
    this.updatedEmitter.emit();
  }

  private getNode(expression: Expression, value: string = ""): Node
  {
    switch (expression.nodeType)
    {
      case NodeType.Addition:
        return new Paren(new Addition(new EmptyNode(), new EmptyNode()));
      case NodeType.Subtraction:
        return new Paren(new Subtraction(new EmptyNode(), new EmptyNode()));
      case NodeType.Multiplication:
        return new Paren(new Multiplication(new EmptyNode(), new EmptyNode()));
      case NodeType.Division:
        return new Paren(new Division(new EmptyNode(), new EmptyNode()));
      case NodeType.Power:
        return new Paren(new Power(new EmptyNode(), new EmptyNode()));
      case NodeType.Function:
        return new Function(expression.title, this.getArguments(Number(value)));
      case NodeType.Variable:
        return new Variable("$" + value);
      case NodeType.Number:
        return new Value(Number(value));
      case NodeType.PI:
        return new PI();
      case NodeType.E:
        return new E();


      default:
        throw new Error(`Invalid node type. NodeType = ${ expression.nodeType }`);
    }
  }

  getNewNode(nodeType: NodeType, firstExpression: Node, secondExpression: Node): Node
  {
    switch (nodeType)
    {
      case NodeType.Addition:
        return new Addition(firstExpression, secondExpression);
      case NodeType.Subtraction:
        return new Subtraction(firstExpression, secondExpression);
      case NodeType.Multiplication:
        return new Multiplication(firstExpression, secondExpression);
      case NodeType.Division:
        return new Division(firstExpression, secondExpression);
      case NodeType.Power:
        return new Power(firstExpression, secondExpression);

      default:
        throw new Error(`Invalid node type ${ nodeType }`);
    }
  }

  private getArguments(argCount: number): Array<Node>
  {
    const args = Array<Node>();
    for (let i = 0; i < argCount; i++)
    {
      args.push(new EmptyNode());
    }
    return args;
  }

  private getPositionId(node: Node, isInLeftSide: boolean): string
  {
    switch (node.type)
    {
      case NodeType.Addition:
        return isInLeftSide ? (<Addition>node).left.id : (<Addition>node).right.id;
      case NodeType.Subtraction:
        return isInLeftSide ? (<Subtraction>node).left.id : (<Subtraction>node).right.id;
      case NodeType.Multiplication:
        return isInLeftSide ? (<Multiplication>node).left.id : (<Multiplication>node).right.id;
      case NodeType.Division:
        return isInLeftSide ? (<Division>node).left.id : (<Division>node).right.id;
      case NodeType.Power:
        return isInLeftSide ? (<Power>node).expression.id : (<Power>node).power.id;
      case NodeType.Function:
        return ((<Function>node).args[0].id);

      default:
        throw new Error(`Invalid node type. NodeType: ${ node.type }`);
    }
  }

  public loadImplementedExpressions(): Array<Expression>
  {
    const result: Array<Expression> = [
      {
        id: 6,
        icon: "calculate",
        title: "Math Operations",
        children: [
          {
            id: 6,
            nodeType: NodeType.Addition,
            icon: "add",
            title: "Addition (+)",
            children: []
          },
          {
            id: 7,
            nodeType: NodeType.Subtraction,
            icon: "remove",
            title: "Subtraction (-)",
            children: []
          },
          {
            id: 8,
            nodeType: NodeType.Multiplication,
            icon: "clear",
            title: "Multiplication (*)",
            children: []
          },
          {
            id: 9,
            nodeType: NodeType.Division,
            icon: "device_hub",
            title: "Division (/)",
            children: []
          },
          {
            id: 10,
            nodeType: NodeType.Power,
            icon: "superscript",
            title: "Power (^)",
            children: []
          }
        ]
      },
      {
        id: 13,
        icon: "task_alt",
        title: "Specific values",
        children: [
          {
            id: 14,
            icon: "task_alt",
            nodeType: NodeType.PI,
            title: "PI",
            children: []
          },
          {
            id: 15,
            icon: "e_mobiledata",
            nodeType: NodeType.E,
            title: "E",
            children: []
          }
        ]
      },
      {
        id: 16,
        icon: "functions",
        title: "Specific functions",
        children: [
          {
            id: 17,
            icon: "functions",
            nodeType: NodeType.Function,
            title: "SQRT",
            children: []
          },
          {
            id: 18,
            icon: "superscript",
            nodeType: NodeType.Function,
            title: "SQR",
            children: []
          },
          {
            id: 27,
            icon: "south_east",
            nodeType: NodeType.Function,
            title: "MIN",
            children: []
          },
          {
            id: 28,
            icon: "north_east",
            nodeType: NodeType.Function,
            title: "MAX",
            children: []
          }
        ]
      },
      {
        id: 19,
        icon: "input",
        title: "Variables",
        children: [
          {
            id: 1,
            icon: "numbers",
            nodeType: NodeType.Number,
            title: "Static Value",
            children: []
          },
          {
            id: 20,
            icon: "text_fields",
            nodeType: NodeType.Variable,
            title: "Text Field",
            children: []
          }
        ]
      }
    ];

    return result;
  }

  ngOnDestroy(): void
  {
    this.dialogSubscription?.unsubscribe();
  }
}
