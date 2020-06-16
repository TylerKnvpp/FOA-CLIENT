import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbubble, personCircleOutline } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
// import Tab2 from "./pages/Tab2";
// import Tab3 from "./pages/Tab3";
import Profile from "./pages/Profile";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// Pages
import Message from "./pages/Message";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

defineCustomElements(window);

const App: React.FC = () => {
  const [loggedIn, setLogin] = useState<boolean>(false);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      setLogin(true);
    }
  }, [loggedIn]);

  return (
    <IonApp>
      <IonReactRouter>
        {loggedIn ? (
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/messages" component={Tab1} exact={true} />

              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />

              <Route
                path="/"
                render={() =>
                  loggedIn ? (
                    <Redirect to="/messages" />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
                exact={true}
              />

              <Route path="/messages/:id" component={Message} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="messages" href="/messages">
                <IonIcon icon={chatbubble} />
                <IonLabel>Messages</IonLabel>
              </IonTabButton>

              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <IonRouterOutlet>
            <Route
              path="/"
              render={() =>
                loggedIn ? (
                  <Redirect to="/messages" />
                ) : (
                  <Redirect to="/login" />
                )
              }
              exact={true}
            />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/sign-up" component={SignUp} exact={true} />
            <Route path="/messages" component={Tab1} exact={true} />
          </IonRouterOutlet>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
