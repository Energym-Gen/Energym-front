import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {
  
  
  constructor(
    private router: Router,
    
  ) { 
    
  }

  ngOnInit(): void {
    if(environment.token == ""){
      alert("Sua sessão expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }
  }

  inicio(){
    this.router.navigate(['/inicio'])
  }
  
}
