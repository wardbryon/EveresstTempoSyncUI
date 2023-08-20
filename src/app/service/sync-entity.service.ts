import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SyncResultEntry} from "../model/sync-result-entry";
import {Environment} from "../environment";

@Injectable({
    providedIn: 'root'
})
export class SyncEntityService {
    private syncUrl: string;

    constructor(private http: HttpClient) {
        const env = new Environment()
        this.syncUrl = env.getSyncUrl;
    }

    public findBySyncTableUUID(syncTableUUID: any): Observable<SyncResultEntry[]> {
        return this.http.get<SyncResultEntry[]>(`${this.syncUrl}/${syncTableUUID}`);
    }

    public findSlackInputBySyncTableUUID(syncTableUUID: any): Observable<any>{
        return this.http.get(`${this.syncUrl}/${syncTableUUID}/slack`);
    }

    public findDayEntitiesBySyncTableUUIDAndResourceId(syncTableUUID: string, resourceId: string, date?: string | null): Observable<any> {
        if(typeof date !== 'undefined' && date != null){
            return this.http.get(`${this.syncUrl}/${syncTableUUID}/${resourceId}/${date}`);
        }else{
            return this.http.get(`${this.syncUrl}/${syncTableUUID}/${resourceId}`);
        }
    }
}
