import types from '../types.js'
import axios from 'axios'

const state={
	ratings:[]
}

const getters={
	ratings(state){
		return state.ratings;
	}
}

const actions={
	getRatings({commit,state}){
		axios.get('/api/ratings').then(resp => {
			if(resp.data.errno==0){
				commit(types.GET_RATINGS,resp.data.data);
			}
		});
	}
}

const mutations={
	[types.GET_RATINGS](state,data){
		state.ratings=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}