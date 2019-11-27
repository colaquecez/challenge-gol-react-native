import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setContainer(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function resetToRoute(routeName, params) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName, params})],
  });

  _navigator.dispatch(resetAction);
}

//other navigation functions

export default {
  navigate,
  resetToRoute,
  setContainer,
};
