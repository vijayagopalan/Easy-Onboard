export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_USER': return { ...state, loading: true };
        case 'CREATE_SUCCESS': return { ...state, user: action.payload, loading: false };
        case 'CREATE_FAIL': return { ...state, error: action.payload, loading: false };
        default: return state;
    }
}
