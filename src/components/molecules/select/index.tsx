import React, { useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  Dialog,
  Portal,
  List,
  Text,
} from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import { RegisterFormConfig } from "../Input/configurations";
import { InputStyleSheet } from "../Input/styles";
import { SelectProps } from "./interface";

const SelectInputDialog = ({
  placeholder,
  data,
  label,
  containerClassName,
  value,
  error,
  setValue,
}: SelectProps) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View className={containerClassName}>
      <Text
        className="mb-2"
        style={error ? InputStyleSheet.labelError : InputStyleSheet.labelCommon}
      >
        {label}
      </Text>
      <TextInput
        mode="outlined"
        value={value.label}
        placeholder={placeholder}
        contentStyle={InputStyleSheet.contentStyle}
        className="rounded-xl"
        outlineStyle={[
          InputStyleSheet.inputOutline,
          error ? InputStyleSheet.error : InputStyleSheet.common,
        ]}
        {...RegisterFormConfig}
        onFocus={showDialog}
        right={
          <TextInput.Icon
            icon="chevron-down"
            color={"#686868"}
            onPress={showDialog}
          />
        }
        editable={false}
        onPress={showDialog}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Seleccionar Opción</Dialog.Title>
          <Dialog.Content>
            {data?.map((item) => (
              <List.Item
                key={item.value}
                title={item.label}
                onPress={() => {
                  setValue(item);
                  hideDialog();
                }}
              />
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default SelectInputDialog;
