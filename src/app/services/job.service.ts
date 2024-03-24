import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Jobs } from './jobs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  lastActiveRoute: string = '';
  constructor(private httpClient:HttpClient) { }

  getJobsList(): Observable<Jobs[]> {
    return this.httpClient.get<Jobs[]>('/jobs').pipe(
      tap(_ => console.log('job data fetched')),
      map(res => res as Jobs[])
    )
  }
  getJobDataById(id:number) :Observable<Job> {
    return this.httpClient.get<Job>(`/jobs/${id}`).pipe(
      tap(_ => console.log('job data')),
      map(res => res as Job)
    )
  }
}
