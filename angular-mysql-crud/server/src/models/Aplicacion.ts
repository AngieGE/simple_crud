import { Cuestionario } from "./Cuestionario";
import { Usuario } from "./Usuario";
import { RespuestaAbierta } from "./RespuestaAbierta";
import { RespuestaMultiple } from "./RespuestaMultiple";



export class Aplicacion {
    idAplicacion?: number;
    fecha?: Date;
    idCuestionario?: number; 
    idUsuario?: number;

    // Has many
    RespuestasAbiertas?: RespuestaAbierta[];
    RespuestasMultiples?: RespuestaMultiple[];


    // Belongs to 
    usuario?: Usuario;
    cuestionario?: Cuestionario;

    constructor(aplicacion: Aplicacion) {
        this.idAplicacion=aplicacion.idAplicacion,
        this.fecha=aplicacion.fecha,
        this.idCuestionario=aplicacion.idCuestionario,
        this.idUsuario=aplicacion.idUsuario;
    }
}