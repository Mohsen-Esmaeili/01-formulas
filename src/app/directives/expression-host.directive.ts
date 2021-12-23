import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[expressionHostDirective]',
})
export class ExpressionHostDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}
