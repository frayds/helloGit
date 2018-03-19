import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    //定义状态
    state: {
        author:'frayd Pu 的用户名是:',
        tree:[{
            label:'A 1',
            children:[{
                label: 'B 1-1',
                children:[{
                    label:'C 1-1-1'
                }]
            }]
        },{
            label:'A 2',
            children:[{
                label:'B 2-1',
                children:[{
                    label:'C 2-1-1'
                }]
            },{
                label:'B 2-2',
                children:[{
                    label:'C 2-2-1'
                }]
            }]
        }]
    },
    mutations: {
        newAuthor (state,msg){
            state.author=msg
        }
    }
})
export default store