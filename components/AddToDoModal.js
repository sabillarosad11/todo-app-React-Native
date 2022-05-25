import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import AppStyle from "../styles/AppStyle";

export default function AddToDoModal(props) {
  let [todo, setTodo] = React.useState("");
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.header}>Add ToDo</Text>
      <TextInput
        style={[AppStyle.textInput, AppStyle.darkTextInput]}
        placeholder="ToDo"
        value={todo}
        onChangeText={setTodo}
      />
      <View
        style={[
          AppStyle.rowContainer,
          AppStyle.rightAligned,
          AppStyle.rightMargin,
        ]}
      >
        <Button title="Cancel" onPress={props.onClose} style={{margin : 20}}/>
        <Button
          title="OK"
          onPress={() => {
            props.addToDo(todo);
            setTodo("");
            props.onClose();
          }}
        />
      </View>
    </View>
  );
}
