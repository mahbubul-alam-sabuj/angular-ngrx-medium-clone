import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/types/app-state.interface';
import { AuthState } from '../types/auth-state.interface';

export const authFeatureKey = 'auth';

export const authFeatureSelector =
  createFeatureSelector<AuthState>(authFeatureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);
