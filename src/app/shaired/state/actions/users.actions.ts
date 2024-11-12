import { createAction, props } from '@ngrx/store';

// Load Users
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: any[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());


// Load Users by id
export const loadUser = createAction(' [User] LoadUser by id ', props<{ id: number }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ userbyid: any[] }>());
export const loadUserFailure = createAction('[User], Load User Failure', props<{ error: string }>());


// Create User
export const createUser = createAction(
    '[User] Create User',
    props<{ email: string, password: string, clinic_id: number, user_role: string }>()
);
export const createUserSuccess = createAction('[User] Create User Success', props<{ user: any }>());
export const createUserFailure = createAction('[User] Create User Failure', props<{ error: string }>());

// Update User
export const updateUser = createAction(
    '[User] Update User',
    props<{ id: number, email: string, clinic_id: number, user_role: string }>()
);
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: any }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: string }>());

// Delete User
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: string }>());
