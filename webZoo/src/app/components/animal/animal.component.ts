import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  imports: [],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  animalList: any = [];

  constructor(private animalService: AnimalService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: any[]) => {
      this.animalList = data;
    });
  }
  
  ngOnInit() {
    this.getAllAnimals();
  }

}
