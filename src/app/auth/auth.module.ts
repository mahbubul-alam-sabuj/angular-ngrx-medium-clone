import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { MAT_MODULES } from '../material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MAT_MODULES,
  ],
})
export class AuthModule {}
