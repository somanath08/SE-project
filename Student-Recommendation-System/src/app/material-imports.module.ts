import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import {
  MatIconModule,
  MatLabel,
  MatHint,
  MatInput,
  MatInputModule,
  MatSuffix,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  MatStep,
  MatStepperPrevious,
  MatStepLabel,
  MatStepperIcon,
  MatStepperNext,
  MatHorizontalStepper
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  ],
  exports: [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  ],
  })
export class MaterialImportsModule {}
