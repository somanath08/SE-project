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
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatButtonModule],
  exports: [MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatButtonModule],
  })
export class MaterialImportsModule {}
