import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipeModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [SlideshowBackdropComponent],
  exports:[SlideshowBackdropComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ]
})
export class ComponentsModule { }
