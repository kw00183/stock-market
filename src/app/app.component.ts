import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app/services/message.service';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  ngOnInit(): void {
  }
}
