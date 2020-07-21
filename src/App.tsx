import React, { useRef } from "react";
import {
  IonApp,
  IonContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonInput,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";

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

const App: React.FC = () => {
  const inputHeightRef = useRef<HTMLIonInputElement>(null);
  const inputWeightRef = useRef<HTMLIonInputElement>(null);

  const calcbutton = () => {
    const enteredHeight = inputHeightRef.current!.value;
    const enteredWeight = inputWeightRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      enteredWeight <= 0 ||
      enteredHeight <= 0
    ) {
      return;
    }
    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

    console.log(bmi);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Your Height: </IonLabel>
              <IonInput ref={inputHeightRef} type="number"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Your Weight: </IonLabel>
              <IonInput ref={inputWeightRef} type="number"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={calcbutton} color="success">
                <IonLabel>Calculate</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="success">
                <IonLabel>Clear Inputs</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
