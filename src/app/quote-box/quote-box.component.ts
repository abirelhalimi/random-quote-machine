import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../models/quote.class';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  public quote = new Quote('', '');
  constructor(private quoteService: QuoteService) { }
  ngOnInit() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.quoteService.getRandomQuote().subscribe((data: Quote) => {
      this.quote = new Quote(data.content, data.author);
    });
  }
}
