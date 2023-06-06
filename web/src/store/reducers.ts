import { combineReducers } from 'redux';
import { userService } from 'src/services/user';

const rootReducer = combineReducers({
  [userService.reducerPath]: userService.reducer,
});

export default rootReducer;
