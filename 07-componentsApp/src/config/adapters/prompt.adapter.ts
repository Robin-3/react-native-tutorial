import prompt from "react-native-prompt-android";

interface PromptButton {
  text: string;
  onPress: (message: string) => void;
  style?: "default" | "cancel" | "destructive"; //ios
}

type PromptType = "default" | "plain-text" | "secure-text";
type PromptTypeIOS = "login-password";
type PromptTypeAndroid = "numeric" | "email-address" | "phone-pad";

export interface PromptOptions {
  type?: PromptType | PromptTypeIOS | PromptTypeAndroid;
  defaultValue?: string;
  // android
  placeholder?: string;
  cancelable?: boolean;
  style?: "default" | "shimo";
}

interface Options {
  title: string,
  message?: string,
  buttons?: PromptButton[];
  options?: PromptOptions;
}

export const showPrompt = ({ title, message, buttons: callbackOrButtons, options }: Options) => {
  prompt(
    title,
    message,
    callbackOrButtons,
    options
  );
};