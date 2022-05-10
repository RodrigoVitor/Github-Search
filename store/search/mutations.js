export default {
    CHANGE_SEARCH (state) {
        state.isSearch = true
    } 
    ,
    CHANGE_USER_NAME (state, payload) {
        state.user_name = payload
    },
    SET_USER(state, payload) {
        state.user = payload
    },
    SET_REPOSITORY(state, payload) {
        state.repositories = payload
    },
    SET_ERROR(state, payload) {
        state.error = payload
    },
    SET_ERROR_EMPTY(state) {
        state.error = ''
    },
    ADD_FAVORITE(state, payload) {
        for (let i = 0; i < state.favorites.length; i++) {
            if (state.favorites[i].id === payload.id)
                return false
        }
        state.favorites.push(payload)
    },
    REMOVE_FAVORITE(state, payload) {
        let i
        for(i=0; i < state.favorites.length; i++) {
            if(state.favorites[i].id === payload) {
                state.favorites.splice(i, 1)
            }
        }
    }
    
}