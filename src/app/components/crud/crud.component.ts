import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Image } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: Image[];

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getFotos().subscribe(

      fotos => {
        this.images = fotos;
        console.log(`Images: ${this.images}`);
        console.log(`data: ${fotos}`);
      },

      error => {
        console.log(error);
      }
    )
  }

}
