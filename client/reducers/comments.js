function postComments(state = [], action) {	
	switch(action.type) {
		case 'ADD_COMMENT' :
		// return existing state + new comment
		  return [...state, {
		  	user: action.author,
		  	text:action.comment
		  }];
		case 'REMOVE_COMMENT' :
		  return [
		  	// from the start to the one we want to delete
		  	...state.slice(0,action.i),
		  	// after the deleted item
		  	...state.slice(action.i+1)
		  ];
		default :
		  return state;
	}
	return state;
}
function comments(state = [], action) {	
	if(typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}
// console.log(state, action);
export default comments;