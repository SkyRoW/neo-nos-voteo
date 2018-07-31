import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NosApiService} from './services/nos-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [NosApiService],
  declarations: [],
  exports: [NosApiService]
})
export class NosWrapperModule { }
