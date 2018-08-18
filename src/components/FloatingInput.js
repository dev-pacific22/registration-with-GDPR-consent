import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Item, Icon, Label, Input } from "native-base";

class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { placeHolder, hasError, iconName, errorMessage, hasSecureTextEntry } = this.props;
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
    color: "red",
    fontSize: 14,
    paddingTop: 5
  },
  inputPaddingLeft: {
    paddingLeft: 10
  }
});
