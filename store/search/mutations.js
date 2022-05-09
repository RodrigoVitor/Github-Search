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
    ADD_FAVORITE(state, payload) {
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