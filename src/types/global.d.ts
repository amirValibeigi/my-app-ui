// global.d.ts

import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      "(auth)/v1": NavigatorScreenParams<AuthV1ParamList>;
      "(auth)/v2": NavigatorScreenParams<AuthV2ParamList>;
      index: undefined;
    }

    interface AuthV1ParamList {
      login: undefined;
      register: undefined;
    }

    interface AuthV2ParamList {
      login: undefined;
    }
  }
}
