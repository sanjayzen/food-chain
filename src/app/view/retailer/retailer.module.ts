import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RetailerComponent } from './retailer/retailer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RetailerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RetailerModule { }
