/**
 * Custom floating common input for the application.
 */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Item, Icon, Label, Input } from "native-base";
import { COLORS } from "../utils";

class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      placeHolder,
      hasError,
      iconName,
      errorMessage,
      hasSecureTextEntry,
      value,
      key
    } = this.props;
    return (
      <React.Fragment>
        <Item floatingLabel error={hasError} style={styles.inputElement}>
          <Icon
            active
            type="MaterialIcons"
            name={iconName}
            style={styles.iconStyle}
          />
          <Label style={styles.placeHolderStyle}>{placeHolder}</Label>
          <Input
            secureTextEntry={hasSecureTextEntry}
            style={styles.inputPaddingLeft}
            onChangeText={text => this.props.onChangeText(text, key)}
            value={value}
          />
        </Item>
        {hasError ? (
          <Label style={styles.errorMessageStyle}>{errorMessage}</Label>
        ) : (
          <Label />
        )}
      </React.Fragment>
    );
  }
}

export default FloatingInput;

const styles = StyleSheet.create({
  inputElement: {
    alignSelf: "stretch",
    marginTop: 15,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: "center"
  },
  iconStyle: {
    fontSize: 16,
    color: "black"
  },
  placeHolderStyle: {
    marginLeft: 5
  },
  errorMessageStyle: {
    color: COLORS.ERROR_LABEL,
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  inputPaddingLeft: {
    paddingLeft: 10
  }
});
