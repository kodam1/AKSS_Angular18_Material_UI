import { elementSelectors } from '@angular/cdk/schematics';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet,MatButton,RouterLink,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  userinput = '';

  cannavigate(){
    if( this.userinput !==''){
      if(confirm('If you leave this form your data will be lost, are you sure you want to continue !')){
        return true;
      }
      else{
        return false;
      }
    }else{
      return true;
    }
  }

}
