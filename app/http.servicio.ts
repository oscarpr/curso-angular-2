import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServico {
    private baseURL: string = 'http://api.football-data.org/';
    private tablaPosicionesURL: string = ''
    private header: Headers;
    private competiciones: Array<Object>;


    constructor(private http: Http) {
        this.header = new Headers();
        this.header.append('X-Auth-Token', '23cada21bd8948feaaa690fb65ee765a');
    }

    obtenerCompeticiones() {
        return this.http.get(this.baseURL + 'v1/competitions/?season=2016', { headers: this.header }).map(res => res.json());
    }

    obtenerTablaPosiciones(idcompeticion: number) {
        return this.http.get(this.baseURL + '/v1/competitions/' + idcompeticion + '/leagueTable', { headers: this.header }).map(res => res.json())
    }
}
