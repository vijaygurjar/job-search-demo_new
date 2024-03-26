import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Jobs } from '../../services/jobs';
import { Job } from '../../services/job';
import { SpinnerLoadDirective } from '../../directives/spinner-load.directive';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerLoadDirective],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  jobList?: Jobs[];
  fJobs:Record<string, Job> = {};
  constructor(private jobService: JobService) {
    this.jobService.lastActiveRoute = 'joblist';
  }

  ngOnInit(){
    this.fJobs = JSON.parse(localStorage.getItem('fjobs') || '');
    this.jobService.getJobsList()
    .subscribe((res:Jobs[])=>{
      this.jobList = res;
    })
  }

  setFavoiriteJob(job:Job) {
    this.fJobs = JSON.parse(localStorage.getItem('fjobs') || '');

    if (this.fJobs[job.id] !== undefined) {
      delete this.fJobs[job.id];
    } else {
      this.fJobs[job.id] = job;
    }
    localStorage.setItem('fjobs', JSON.stringify(this.fJobs));
  }
}
