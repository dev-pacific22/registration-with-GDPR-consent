/**
 * Home screen component.
 */
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Label
} from "native-base";
import { StyleSheet } from "react-native";
import { styles } from "./Style";
import { COLORS } from "../utils";
import { strings } from "../i18n";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    //TODO: Make server call here to fetch data from server for home screen.
    console.log(JSON.stringify(this.props.navigation.state.params));
  };

  render() {
    return (
      <React.Fragment>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{strings("title.home")}</Title>
          </Body>
        </Header>
        <View style={localStyles.containerStyle}>
          <Label style={styles.labelQuestionTitle}>
            {strings("label.dear_user")}
          </Label>
          <Label style={styles.labelQuestion}>
            {strings("message.welcome-message")}
          </Label>
          <Label style={styles.labelQuestionTitle}>
            {strings("label.thank_you")}
          </Label>
        </View>
      </React.Fragment>
    );
  }
}
const localStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR
  }
});
export default HomeScreen;
