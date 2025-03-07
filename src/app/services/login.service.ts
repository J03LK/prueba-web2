import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";  // Importar catchError para manejo de errores

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_LOGIN = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Obtener datos
  getLogin(): Observable<any> {
    return this.http.get<any>(this.API_LOGIN).pipe(
      catchError(this.handleError)  // Manejo de errores
    );
  }

  // Enviar datos
  postLogin(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_LOGIN, usuario).pipe(
      catchError(this.handleError)  // Manejo de errores
    );
  }
  

  // Función para manejar los errores
  private handleError(error: any): Observable<never> {
    // Agregar detalles sobre el error, dependiendo del tipo
    if (error.status === 400) {
      console.error('Error de solicitud incorrecta:', error);
    } else if (error.status === 401) {
      console.error('Credenciales incorrectas:', error);
    } else {
      console.error('Error inesperado:', error);
    }
    return throwError(() => new Error('Algo salió mal. Inténtalo de nuevo.'));
  }
}
