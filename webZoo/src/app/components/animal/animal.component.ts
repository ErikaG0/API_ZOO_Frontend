import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  imports: [ReactiveFormsModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']

})
export class AnimalComponent {
  animalList: any = [];
  animalForm: FormGroup | any ;

  constructor(private animalService: 
    AnimalService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: any[]) => {
      this.animalList = data;
    });
  }
  
  ngOnInit() {
    this.animalForm = this.formBuilder.group({
        nombre:'',
        edad:0,
        tipo: ''
    })
    this.getAllAnimals();
  }

  newMessage(messageText: string) {
    this.toastr.success('Click actualliza', messageText)
    .onTap
    .pipe(take(1))
    .subscribe(() => window.location.reload())
  }

  newAnimalEntry() {
    console.log("ingresa crear")
    this.animalService.newAnimal(this.animalForm.value).subscribe(() => {
      this.router.navigate(['/inicio']);
    });
  }
  

}
