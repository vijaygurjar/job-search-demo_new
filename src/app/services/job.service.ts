import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Jobs } from './jobs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  lastActiveRoute: string = '';
  constructor(private httpClient:HttpClient) { }

  getJobsList() {
    return this.httpClient.get<Jobs[]>('/jobs').pipe(
      tap(_ => console.log('job data fetched'))
    )
  }
  getJobDataById(id:number) {
    return this.httpClient.get<Job>(`/jobs/${id}`).pipe(
      tap(_ => console.log('job data'))
    )
  }
}
