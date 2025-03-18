// global.d.ts

import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      "(auth)": NavigatorScreenParams<AuthParamList>;
    }

    interface AuthParamList {
      index: undefined;
      login: undefined;
      register: undefined;
    }
  }
}
