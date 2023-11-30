import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class crearclaseService {
  private supabase: any ;
  private autenticado = false; // Variable para rastrear el estado de autenticación

  constructor() { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

    async obtenerIdseccion (idSeccion: number){
        const{ data, error} = await this.supabase
        .from('seccion')
        .select('id_seccion')
        .eq('id_seccion', idSeccion)
        if (error){
            console.error('error al obtener id seccion',error);
            return false;
        }
        if (data && data.length > 0) {
            return data[0].id_Seccion;
        } else {
            console.error('No se encontró ninguna sección.');
            return null;
        }
    }

    async crearClase (horaIni: string, horaFin: string){
        const {data, error} = await this.supabase
        .from('clase')
        .upsert([
            {
                hora_ini: horaIni,
                hora_fin: horaFin
            }
        ]);
        if (error) {
            console.error('Error al crear la clase:', error);
            return false;
          }
        return true;
    }

}