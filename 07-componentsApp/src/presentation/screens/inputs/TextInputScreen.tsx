import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const TextInputScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title safe text="Text Inputs" />
          <Card>
            <TextInput
              style={{ ...globalStyles.input, color: colors.text }}
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={{ ...globalStyles.input, color: colors.text }}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={{ ...globalStyles.input, color: colors.text }}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <View style={{ height: 20 }} />
          <Card>
            <TextInput
              style={{ ...globalStyles.input, color: colors.text }}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>
        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView >
  );
};