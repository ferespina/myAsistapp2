import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from '../../services/supabase/usuario.service';
import { Router } from '@angular/router';
import { crearclaseService } from '../../services/supabase/crearclase.service';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomeprofesorPage implements OnInit {

  constructor(
    private crearclaseService: crearclaseService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cerrarSesion() {
    
    this.usuarioService.establecerAutenticacion(false);

    this.router.navigate(['/usertype']);

    console.log('Usuario autenticado:', this.usuarioService.estaAutenticado())
  }
  
}
