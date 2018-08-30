import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    
  ) { }

  canActivate() {

    if( this._usuarioService.usuario._id === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log ('Bloquedado por el ADMIN GURAD');
      this._usuarioService.logout();
      return false;
    }


  }
}
