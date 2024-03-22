import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../services/job';
import { CommonModule } from '@angular/common';
import { SpinnerLoadDirective } from '../../directives/spinner-load.directive';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, SpinnerLoadDirective],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  jobDetails?:Job;
  constructor(private route: ActivatedRoute, public jobService:JobService){
      console.log(this.route)

  }
  ngOnInit() {
    let id:number = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.jobService.getJobDataById(id)
    .subscribe((res:Job)=> {
      this.jobDetails = res;
      console.log(this.jobDetails)
    });
  }
}
