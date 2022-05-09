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
    }
    
}