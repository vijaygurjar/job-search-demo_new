import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'jobs/:id',
    loadComponent: () => import('./jobs/job-detail/job-detail.component').then(m => m.JobDetailComponent)
  },
  {
    path: 'favourite',
    loadComponent: () => import('./jobs/favourite-job/favourite-job.component').then(m => m.FavouriteJobComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./jobs/job-list/job-list.component').then(m => m.JobListComponent)
  }];
