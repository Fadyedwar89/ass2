import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  products: Iproduct[] = [];

  ngOnInit(): void {
    this._ProductsService.getdata().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
