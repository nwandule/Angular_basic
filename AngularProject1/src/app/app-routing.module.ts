import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
