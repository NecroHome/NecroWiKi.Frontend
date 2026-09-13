import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    constructor(
        private readonly http: HttpClient
    ) {
    }

    downloadUrl(gameName: string): string {
        return `${environment.backendContext}download/${gameName}`;
    }
}
