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
  MatRadioModule,
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
  MatRadioModule,
  ],
  exports: [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatRadioModule,
  ],
  })
export class MaterialImportsModule {}
