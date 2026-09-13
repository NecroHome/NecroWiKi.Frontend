import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    constructor(
        private readonly http: HttpClient
    ) {
    }

    download(gameName: string): Observable<Blob> {
        return this.http.get(`${environment.backendContext}download/${gameName}`, {
            responseType: 'blob'
        });
    }
}
