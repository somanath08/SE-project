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
  MatHorizontalStepper,
  MatSelect,
  MatOption,
  MatSelectModule,
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
  MatSelectModule,
  ],
  exports: [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  ],
  })
export class MaterialImportsModule {}
