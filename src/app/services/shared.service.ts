import { EventEmitter, Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  }
)
export class SharedService
{
  selectedEmitter = new EventEmitter<string>();
  updatedEmitter = new EventEmitter();
}
