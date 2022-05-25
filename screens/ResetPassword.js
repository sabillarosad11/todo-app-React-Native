import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AppStyle from "../styles/AppStyle";
import InlineTextButton from "../components/InlineTextButton";
import React from "react";
// import { auth } from "../firebase";
// import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPassword({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

//   let resetPassword = () => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         navigation.popToTop();
//       })
//       .catch((error) => {
//         setErrorMessage(error.message);
//       });
//   };

  return (
    <ImageBackground style={AppStyle.imageContainer} source={background}>
      <KeyboardAvoidingView
        style={AppStyle.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <Text style={[AppStyle.lightText, AppStyle.header]}>
          Reset Password
        </Text>
        <Text style={AppStyle.errorText}>{errorMessage}</Text>
        <TextInput
          style={[
            AppStyle.textInput,
            AppStyle.lightTextInput,
            AppStyle.lightText,
          ]}
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail}
        />
        <View style={[AppStyle.rowContainer, AppStyle.topMargin]}>
          <Text style={AppStyle.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
        <Button
          title="Reset Password"
          color="#f7b267"
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
