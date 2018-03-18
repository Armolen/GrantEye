import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
  ],
  declarations: [BarComponent]
})
export class MainModule { }
