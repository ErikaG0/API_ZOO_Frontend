import { Component } from '@angular/core';
//peticiones al http
import { AnimalService } from '../../services/animal.service';
//muestra notificaciones
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


//mi componente se llama app-animañ uso el template usa el css
@Component({
  selector: 'app-animal',
  imports: [ReactiveFormsModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']

})

export class AnimalComponent {
  //guarda la lista de animaldes que viene del backend
  animalList: any = [];
  //guarfa el formilario que el usuaro completa para crear un nuevo animal
  animalForm: FormGroup | any ;

  //inyecta los servicios que el componente necesita
  constructor(
    private animalService: 
    AnimalService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: any[]) => {
      this.animalList = data;
    });
  }
  
  //se ejecuta cuando el componente se carga por primera vez
  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      //crea un formulario
        nombre:'',
        edad:0,
        tipo: ''
    })
    //llama a tabla animales
    this.getAllAnimals();
  }

  //muestra el popup, recarga la pagina
  newMessage(messageText: string) {
  this.toastr.success(messageText, 'Éxito');
}



  //se ejcecuta al crear un animal
  newAnimalEntry() {
    console.log("ingresa crear")
    this.animalService.newAnimal(this.animalForm.value).subscribe(() => {
      this.getAllAnimals();
      this.newMessage("animal registrado")
    });
  }
  

}
