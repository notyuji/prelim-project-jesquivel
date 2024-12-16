import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmplistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductComponent },
  { path: '**', component: PagenotfoundComponent },
];
