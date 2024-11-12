export interface UserState {
    users: any[];           
    loading: boolean;       
    error: string | null;    
    success: boolean;        
}

export const initialUserState: UserState = {
    users: [],
    loading: false,
    error: null,
    success: false
};