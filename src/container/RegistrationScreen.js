import React, { Component } from "react";
import { View, Text, Button } from "native-base";

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Home Screen</Text>
        </Button>
      </View>
    );
  }
}

export default RegistrationScreen;
