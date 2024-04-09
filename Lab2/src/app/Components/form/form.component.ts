import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = "";
  currentIndex = 0;
  interval:any;
  imageArray = [
    "assets/images/1.jpg",
    "assets/images/2.jpeg",
    "assets/images/3.jpeg",
    "assets/images/4.jpeg",
    "assets/images/5.jpeg"
  ] 

  reset(){
    this.name = "";
  }

  nextImage(){
    this.currentIndex++;
    if(this.currentIndex >= this.imageArray.length){
      this.currentIndex = 4;
    }
  }

  prevImage(){
    if(this.currentIndex == 0){
       this.currentIndex = 0;
    }else{
       this.currentIndex--;
    }
  }

  slideShow(){
    this.interval = setInterval(() => {
      this.currentIndex++;
      if(this.currentIndex >= this.imageArray.length){
        this.currentIndex = 0;
      }
    }, 500);
  }

  stop(){
    clearInterval(this.interval);
  }
}
