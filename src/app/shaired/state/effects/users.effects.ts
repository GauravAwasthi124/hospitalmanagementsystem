import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from '../../service/users/users.service';
import {
    loadUsers, loadUsersSuccess, loadUsersFailure,
    loadUser, loadUserSuccess,loadUserFailure,
    createUser, createUserSuccess, createUserFailure,
    updateUser, updateUserSuccess, updateUserFailure,
    deleteUser, deleteUserSuccess, deleteUserFailure
} from '../actions/users.actions';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UsersService) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(() =>
                this.userService.getAllUsers().pipe(
                    map(users => loadUsersSuccess({ users })),
                    catchError(error => of(loadUsersFailure({ error: error.message })))
                )
            )
        )
    );

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUser),
            mergeMap((action) =>
                this.userService.getUserByid(action.id).pipe( 
                    map(userbyid=> loadUserSuccess({ userbyid })), 
                    catchError(error => of(loadUserFailure({ error: error.message })))
                )
            )
        )
    );


    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createUser),
            mergeMap(action =>
                this.userService.createUser(action.email, action.password, action.clinic_id, action.user_role).pipe(
                    map(user => createUserSuccess({ user })),
                    catchError(error => of(createUserFailure({ error: error.message })))
                )
            )
        )
    );


    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUser),
            mergeMap(action =>
                this.userService.updateUser(action.id, action.email, action.clinic_id, action.user_role).pipe(
                    map(user => updateUserSuccess({ user })),
                    catchError(error => of(updateUserFailure({ error: error.message })))
                )
            )
        )
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteUser),
            mergeMap(action =>
                this.userService.deleteUser(action.id).pipe(
                    map(() => deleteUserSuccess({ id: action.id })),
                    catchError(error => of(deleteUserFailure({ error: error.message })))
                )
            )
        )
    );
}
