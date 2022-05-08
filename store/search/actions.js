export default {
    async search_user ({state, commit, dispatch}) {
        commit('CHANGE_SEARCH')
        try {
            const res = await this.$axios.$get("https://api.github.com/users/" + state.user_name)
            commit("SET_USER", res)
            dispatch('get_repository')
            console.log(state.user)
        } catch (error) {
            console.log(error)
        }
    },

    async get_repository ({state, commit}) {
        try {
            const res = await this.$axios.$get(`https://api.github.com/users/${state.user_name}/repos`)
            commit("SET_REPOSITORY", res)
            console.log(state.repositories)
        } catch (error) {
            console.log(error)
        }
    }
}