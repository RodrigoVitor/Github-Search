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
    }
}