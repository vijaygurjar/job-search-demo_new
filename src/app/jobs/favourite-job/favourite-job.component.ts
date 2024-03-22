import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerLoadDirective } from '../../directives/spinner-load.directive';
import { RouterLink } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-favourite-job',
  standalone: true,
  imports: [CommonModule, SpinnerLoadDirective, RouterLink],
  templateUrl: './favourite-job.component.html',
  styleUrl: './favourite-job.component.css'
})
export class FavouriteJobComponent {
  fJobs?:Record<string, any>;
  constructor(private jobService:JobService) {
    this.jobService.lastActiveRoute = 'favourite';
  }

  ngOnInit() {
    this.fJobs = JSON.parse(localStorage.getItem('fjobs') || '');
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
