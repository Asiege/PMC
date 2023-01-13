export default {

    state: () => ({
        userinfo: '打代码',
        user: '冥界',
        type: 'vscode'
    }),
    getters: {
        description: function (state, getters, n) {
            console.log(getters)
            console.log(state)
            console.log(n)
            return state.user + state.type + n.msgs
        }

    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setType(state, payload) {
            state.type = payload
        }
    },
    actions: {
        asyncSetType: function (content, payload) {
            setTimeout(() => {
                content.commit('setType', payload)
            }, 2000)
        }
    }
}
