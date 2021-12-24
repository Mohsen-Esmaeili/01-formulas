import { EventEmitter, Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Node } from '../models/node';
import { AddNodePositionComponent } from './../components/formulizer/expression/add-node-position/add-node-position.component';
import { NodeType } from './../constants/node-type';


@Injectable({
  providedIn: "root"
})
export class SharedService
{
  selectedEmitter = new EventEmitter<string>();
  updatedEmitter = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  openPositionSelectionDialog(nodeType: NodeType, newNode: Node, acceptCallBackFunc: Function): void
  {
    const dialogRef = this.dialog.open(AddNodePositionComponent, {
      panelClass: "add-node-position-modal",
      hasBackdrop: true,
      minWidth: "350px",
      minHeight: "350px",
      data: {
        nodeType: nodeType
      }
    });

    dialogRef.afterClosed().subscribe(response =>
    {
      if (response.isSelected)
      {
        acceptCallBackFunc(response.result, newNode);
      }
    });
  }
}
