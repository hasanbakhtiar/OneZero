import { combineReducers, createStore } from 'redux';
import blogsReducer from '../reducers/blogs';

// Store Start
export default ()=>{
    const store = createStore(
        combineReducers({
           item: blogsReducer
        })
    )
    return store;
}
// Store End