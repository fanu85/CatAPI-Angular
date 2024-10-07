import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent implements OnInit {

    cats: Cat[] = [];

  constructor(private catService: CatService){}
  
  ngOnInit(): void {
      this.catService.getCats().subscribe(
        (data)=>{
            this.cats = data;
        }
      );
  }
}
