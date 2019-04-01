import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css'],
  })
export class DialougeComponent {
  constructor(
    public dialogRef: MatDialogRef<DialougeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  title: String;
  message: String;
  valid: Boolean;
}
