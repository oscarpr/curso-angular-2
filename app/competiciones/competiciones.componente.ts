import { HttpServico } from './../http.servicio';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'competiciones',
    templateUrl: '/app/competiciones/competiciones.template.html',
    styleUrls: ['./app/competiciones/competiciones.style.scss']
})
export class ComponenteCompeticiones implements OnInit {
    private competiciones: Array<Object>;
    private competicionseleccionada: number;

    constructor(private http: HttpServico) { }

    ngOnInit() {
        this.http.obtenerCompeticiones().subscribe(
            dato => this.competiciones = dato,
            err => console.log(err),
            () => {
                this.tratarCompeticiones();
            }
        );
    }

    tratarCompeticiones() {
        this.competiciones.forEach(competicion => {
            if ((<String>competicion['caption']).includes('.')) {
                competicion['caption'] = (<String>competicion['caption']).split('.')[1].trim()
            }
            competicion['caption'] = (<string>competicion['caption']).replace('2016/17', '');
        })
    }
}
