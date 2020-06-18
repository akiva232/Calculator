import { Component, OnInit } from '@angular/core';
import { HisService } from 'src/app/services/his.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public arrHistory:HisService) { }

  ngOnInit(): void {
  }

}
