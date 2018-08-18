import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Card,
  Item,
  Label,
  Icon,
  Input,
  Button,
  Text,
  View
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onRegisterClickAction } from "../actions";
import FloatingInput from "../components/FloatingInput";
import { COLORS } from "../utils";
import { styles } from "./Style";

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrorName: false,
      errorMessageName: "Please enter your full name.",
      hasErrorEmail: false,
      errorMessageEmail: "Please enter valid email.",
      hasErrorPassword: false,
      errorMessagePassword: "Please enter valid password."
    };
  }
  onRegisterClick = message => {
    this.setState({ hasErrorName: true, hasErrorEmail: false, hasErrorPassword: true });
    this.props.onRegisterClickAction(message);
  };
  render() {
    const { hasErrorName, errorMessageName, hasErrorEmail, errorMessageEmail, hasErrorPassword, errorMessagePassword } = this.state;
    return (
      <View style={localStyles.rootContainerStyle}>
        <Card style={localStyles.containerStyle}>
          <Label style={styles.labelHeader}>Register User</Label>
          <FloatingInput
            placeHolder="Full Name"
            iconName="account-box"
            hasError={hasErrorName}
            errorMessage={errorMessageName}
          />

          <FloatingInput
            placeHolder="Email"
            iconName="account-box"
            hasError={hasErrorEmail}
            errorMessage={errorMessageEmail}
          />
          <FloatingInput
            placeHolder="Password"
            iconName="lock"
            hasError={hasErrorPassword}
            errorMessage={errorMessagePassword}
            hasSecureTextEntry={true}
          />
          <Button
            style={[localStyles.buttonRegister, styles.buttonSolid]}
            onPress={() => this.onRegisterClick(errorMessageName)}
          >
            <Text uppercase={false} style={styles.buttonText}>
              Register
            </Text>
          </Button>
        </Card>
        <Text> {this.props.message} </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ registration }) => {
  const { email, password, error, loading, message } = registration;
  return { email, password, error, loading, message };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onRegisterClickAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationScreen);

const localStyles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR
  },
  containerStyle: {
    alignSelf: "stretch",
    margin: 15,
    padding: 15,
    alignSelf: "center"
  },
  buttonRegister: {
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    alignSelf: "center"
  }
});
