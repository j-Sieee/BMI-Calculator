import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResults: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard className="ion-text-center">
          <IonCardContent className="ion-text-center">
            <h2 className="ion-text-center">You BMI: </h2>
            <h2 className="ion-text-center">{props.result.toFixed(2)}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResults;
