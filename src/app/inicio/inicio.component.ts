import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  postagem: Postagem = new Postagem()


  idUsuario = environment.id
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    // private postagemService: PostagemService,
    private temaService: TemaService,
    private authh: AuthService
  ) {}


  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      alert ('')
      this.router.navigate(['/login']);
    }
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema (){
    this.temaService.getAllTemas().subscribe((resp:Tema[])=>{
      this.listaTemas = resp
    })
  }
  publicar(){
    this.tema.id = this.idTema = this.idTema
    this.postagem.tema = this.tema

    this.usuario.idUsuario = this.idUsuario
    this.postagem.usuario = this.usuario

    // this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      // this.postagem = resp
      // alert('Postagem realizada com sucesso!')
  // })

  }


}


