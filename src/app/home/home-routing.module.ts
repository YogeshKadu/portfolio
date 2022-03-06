import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'slider',
    pathMatch:'full'
  },
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'slider',
        loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
