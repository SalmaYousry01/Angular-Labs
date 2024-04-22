import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-onestudent',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './onestudent.component.html',
  styleUrl: './onestudent.component.css'
})
export class OnestudentComponent {
 @Input() student:any;

}
