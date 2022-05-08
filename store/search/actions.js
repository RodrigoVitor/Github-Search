export default {
    async search_user ({state, commit}) {
        commit('CHANGE_SEARCH')
        try {
            const res = await this.$axios.$get("https://api.github.com/users/" + state.user_name)
            commit("SET_USER", res)
            console.log(state.user)
        } catch (error) {
            console.log(error)
        }
    }
}