
import { Routes, RouterModule } from '@angular/router';
import { AllThreadsComponent } from '../allThreads/allThreads.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';
import { NewThreadComponent } from '../newThread/newThread.component';
import { SingleThreadComponent } from '../singleThread/singleThread.component';

export const routes: Routes = [
  { path: '', redirectTo:'index', pathMatch:'full'},
  { path: 'index', component: AllThreadsComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: SingleThreadComponent}]
