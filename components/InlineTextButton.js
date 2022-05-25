import { Text, Pressable } from "react-native";
import AppStyle from "../styles/AppStyle";

export default function InlineTextButton(props) {
  let style = {};
  if (props.color) {
    style.color = props.color;
  }
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
        <Text
          style={[
            pressed
              ? AppStyle.pressedInlineTextButton
              : AppStyle.inlineTextButton,
            style,
          ]}
        >
          {props.text}
        </Text>
      )}
    </Pressable>
  );
}
