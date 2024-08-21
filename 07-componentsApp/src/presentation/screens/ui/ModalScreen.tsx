import { Modal, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { useState } from "react";
import { Button } from "../../components/ui/Button";

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title safe text="modal" />
      <Button text="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <View
          style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Title safe text="Modal content" />
          </View>
          <View style={{ flex: 1 }} />
          <Button
            text="Cerrar modal"
            onPress={() => setIsVisible(false)}
            style={{ height: 40, borderRadius: 0 }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};