import { createReducer, on } from '@ngrx/store';
import {
    loadUsers, loadUsersSuccess, loadUsersFailure,
    loadUser,loadUserSuccess,loadUserFailure,
    createUser, createUserSuccess, createUserFailure,
    updateUser, updateUserSuccess, updateUserFailure,
    deleteUser, deleteUserSuccess, deleteUserFailure
} from '../actions/users.actions';

export interface UserState {
    users: any[];
    userbyid: any[];
    error: string | null;
    loading: boolean;
}

export const initialState: UserState = {
    users: [],
    userbyid: [],
    error: null,
    loading: false
};

export const userReducer = createReducer(
    initialState,
    // Load Users
    on(loadUsers, state => ({ ...state, loading: true })),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
    on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Load User by ID
    on(loadUser, state => ({ ...state, loading: true })), // Reset userbyid before loading
    // on(loadUserSuccess, (state, { userbyid }) => {
    //     console.log("User data received in reducer:", userbyid); // Add this log
    //     return { ...state, userbyid, loading: false };
    // }),
    on(loadUserSuccess, (state, { userbyid }) => ({ ...state, userbyid, loading: false })),
    on(loadUserFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Create User
    on(createUser, state => ({ ...state, loading: true })),
    on(createUserSuccess, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        loading: false
    })),
    on(createUserFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Update User
    on(updateUser, state => ({ ...state, loading: true })),
    on(updateUserSuccess, (state, { user }) => ({
        ...state,
        users: state.users.map(u => u.id === user.id ? user : u),
        loading: false
    })),
    on(updateUserFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Delete User
    on(deleteUser, state => ({ ...state, loading: true })),
    on(deleteUserSuccess, (state, { id }) => ({
        ...state,
        users: state.users.filter(user => user.id !== id),
        loading: false
    })),
    on(deleteUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
