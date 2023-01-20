export type DarkModeStateType = {
  darkMode: boolean;
};

enum DarkModeActionType {
  LIGHT = "LIGHT",
  DARK = "DARK",
  TOGGLE = "TOGGLE",
}

export type IAction = {
  type: DarkModeActionType;
};

const DarkModeReducer = (state: DarkModeStateType, action: IAction) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
