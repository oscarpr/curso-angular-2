import { HttpServico } from './../../http.servicio';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'tabla-posiciones',
    templateUrl: '/app/competiciones/tabla-posiciones/tabla-posiciones.template.html',
    inputs: ['idcompeticion']
})
export class ComponenteTablaPosiciones implements OnInit {
    private idcompeticion: number;
    private competicion: Array<Object>;

    constructor(private http: HttpServico) { }

    ngOnInit() { }

    ngOnChanges(changes: { [nombrePropiedad: string]: SimpleChanges }) {
        if (changes['idcompeticion'] && this.idcompeticion !== undefined) {
            this.http.obtenerTablaPosiciones(this.idcompeticion).subscribe(
                dato => this.competicion = dato,
                err => {
                    if (err['status'] === 404) {
                        alert('No se encontraron tabla de posición para esta competición');
                        this.competicion = undefined;
                    }
                },
                () => this.tratarCompeticion()
            );
        }
    }

    tratarCompeticion() {
        if ((<String>this.competicion['leagueCaption']).includes('.')) {
            this.competicion['leagueCaption'] = (<string>this.competicion['leagueCaption']).split('.')[1];
        }
        this.competicion['leagueCaption'] = (<string>this.competicion['leagueCaption']).replace('2016/17', '');
    }

}