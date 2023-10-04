import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  quoteCount: number = 5;
  quotes: any[] = [];

  constructor(private http: HttpClient) {}

  getQuotes() {
    this.http
      .get(`https://api.gameofthronesquotes.xyz/v1/random/${this.quoteCount}`)
      .subscribe((data: any) => {
        this.quotes = data;
      });
  }

}
