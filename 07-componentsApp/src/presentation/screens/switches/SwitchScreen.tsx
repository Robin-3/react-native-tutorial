import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Card } from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text="Activo"
        />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text="Activo"
        />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="Activo"
        />
      </Card>
    </CustomView >
  );
};