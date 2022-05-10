export default {
    async search_user ({state, commit, dispatch}) {
        try {
            const res = await this.$axios.$get("https://api.github.com/users/" + state.user_name)
            commit("SET_USER", res)
            dispatch("get_repository")
            commit("SET_ERROR_EMPTY")
            commit("CHANGE_SEARCH")
            console.log(state.user)
        } catch (error) {
            commit("SET_ERROR", "Usuário não encotrado")
        }
    },

    async get_repository ({state, commit}) {
        try {
            const res = await this.$axios.$get(`https://api.github.com/users/${state.user_name}/repos`)
            commit("SET_REPOSITORY", res)
        } catch (error) {
            return false
        }
    }
}