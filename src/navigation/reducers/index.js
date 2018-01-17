import ApplicationNavigator from "../navigators";
import { WELCOME } from "../screen_names";

let initialState = {
  index: 0,
  routes: [
    {
      key: "welcome",
      routeName: WELCOME
    }
  ]
};

const navigationData = (state, action) => {
  const nextState = ApplicationNavigator.router.getStateForAction(
    action,
    state
  );

  return nextState || state;
};

export default navigationData;
