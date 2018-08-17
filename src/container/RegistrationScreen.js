import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onRegisterClickAction } from "../actions";

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onRegisterClick = message => {
    this.props.onRegisterClickAction(message);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text> {this.props.message} </Text>
        <Button onPress={() => this.onRegisterClick("Test")}>
          <Text>Home Screen</Text>
        </Button>
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
