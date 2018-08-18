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
import { COLORS, CONSTANTS } from "../utils";
import { styles } from "./Style";
import validator from "validator";

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      name: "",
      email: "",
      password: ""
    };
  }
  onRegisterClick = message => {
    const errors = this.validateRegistrationForm();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.onRegisterClickAction(message);
    }
  };
  validateRegistrationForm = () => {
    const errors = {};
    const { name, email, password } = this.state;
    if (name.length <= 0) {
      errors.hasErrorName = true;
      errors.errorMessageName = "Please enter your full name.";
    }
    if (!validator.isEmail(email)) {
      errors.hasErrorEmail = true;
      errors.errorMessageEmail = "Please enter valid email.";
    }
    if (!CONSTANTS.REGEX.PASSWORD_REGEX.test(password)) {
      errors.hasErrorPassword = true;
      errors.errorMessagePassword =
        "Password should be more than 8 letters and combination of at least on upper case, one numeric and one special character.";
    }
    return errors;
  };
  onNameChange = value => {
    this.setState({ name: value });
  };
  onEmailChange = value => {
    this.setState({ email: value });
  };
  onPasswordChange = value => {
    this.setState({ password: value });
  };

  render() {
    const { email, name, password } = this.state;
    const {
      hasErrorName,
      errorMessageName,
      hasErrorEmail,
      errorMessageEmail,
      hasErrorPassword,
      errorMessagePassword
    } = this.state.errors;

    return (
      <View style={localStyles.rootContainerStyle}>
        <Card style={localStyles.containerStyle}>
          <Label style={styles.labelHeader}>Register User</Label>
          <FloatingInput
            placeHolder="Full Name"
            iconName="account-box"
            hasError={hasErrorName}
            errorMessage={errorMessageName}
            value={name}
            onChangeText={this.onNameChange}
          />

          <FloatingInput
            placeHolder="Email"
            iconName="account-box"
            hasError={hasErrorEmail}
            errorMessage={errorMessageEmail}
            value={email}
            onChangeText={this.onEmailChange}
          />
          <FloatingInput
            placeHolder="Password"
            iconName="lock"
            hasError={hasErrorPassword}
            errorMessage={errorMessagePassword}
            value={password}
            onChangeText={this.onPasswordChange}
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
