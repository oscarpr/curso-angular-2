import { PipeNombreCompeticion } from './nombre-equipo.pipe';
import { RouterModule } from '@angular/router';
import { ComponenteTablaPosiciones } from './tabla-posiciones/tabla-posiciones.componente';
import { HttpServico } from './../http.servicio';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteCompeticiones } from './competiciones.componente';

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot([
            {
                path: 'tabla-posiciones',
                component: ComponenteCompeticiones
            }
        ])
    ],
    exports: [ComponenteCompeticiones],
    declarations: [
        ComponenteCompeticiones,
        ComponenteTablaPosiciones,
        PipeNombreCompeticion
    ],
    providers: [HttpServico],
})
export class ModuloCompeticiones { }
