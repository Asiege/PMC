export default {
    namespaced: true,
    state: () => ({
        a: '华为',
        b: '小米',
        type: '商城'
    }),
    getters: {
        description: function (state) {
            return state.a + state.type
        }

    },
    mutations: {
        setUser(state, payload) {
            state.a = payload
        },
        setType(state, payload) {
            state.type = payload
        }
    },
    actions: {
        asyncSetType: function (content, payload) {
            content.commit('setType', payload)
        }
    }
}