import * as Types from './type'
const mutations={
  [Types.INCREMENT](state){
    state.count+=1;
  },
  [Types.DECREMENT](state){
    state.count-=1;
  }
};
export default mutations;
