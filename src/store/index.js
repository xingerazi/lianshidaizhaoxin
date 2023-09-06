import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state={
    collapse:false
}

const mutations={
    changeCollapse(state){
        setTimeout(() => {
            state.collapse=true
        }, 1000);
    }
}

export default new Vuex.Store({
    state,mutations
})