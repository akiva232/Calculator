import { Component, OnInit } from '@angular/core';
import { HisService } from 'src/app/services/his.service';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  constructor(public arrHistory: HisService) { }

  num1: string = '';
  resulte: string = '';
  number: string = '';

  add(value: string) {
    if (value == '=') {

      this.number=this.num1 + '=' + String(eval(this.num1))
      this.resulte = (eval(this.num1));
      this.arrHistory.inputArr.push(this.number);
     
      this.number=''
    this.num1=''
    return
   
    }
   
   
    this.num1 += value;
  }
   

  ngOnInit(): void {
  }

}
