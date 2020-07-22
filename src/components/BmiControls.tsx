import React from "react";
import { IonRow, IonCol, IonButton, IonLabel } from "@ionic/react";

const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonButton onClick={props.onCalculate} color="success">
          <IonLabel>Calculate</IonLabel>
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton onClick={props.onReset} color="success">
          <IonLabel>Clear Inputs</IonLabel>
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
