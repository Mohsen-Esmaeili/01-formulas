import { EventEmitter, Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class SharedService
{
  // For detecting the selected node
  selectedEmitter = new EventEmitter<string>();

  // When changing the formula we need to be aware the textarea and AST need to reload
  updatedEmitter = new EventEmitter();
}
