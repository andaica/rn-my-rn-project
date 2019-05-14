import { StyleSheet } from "react-native";
const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles: any = StyleSheet.create({

  label: {
    fontWeight: '500',
    fontSize: 12,
    color: '#4a546f'
  },
  form: {
    padding: 10
  },
  text: {
    bottom: 6,
    marginTop: 0,
    padding: 20,
    fontSize: 12,
    color: '#4a546f'
  },
  
  textcontent: {
    padding: 12,
    fontSize: 12,
    lineHeight: 25,
    color: '#4a546f'
  },
  textsign: {
    position: "absolute",
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    alignItems: "center",
  },
  tabs: {
    height: deviceHeight / 1.35,
  },
  textInput: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 15,
    height: 40,
    margin: 0,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#c8cbd4',
    backgroundColor: 'white'
  },
  buttoninfo: {
    width: deviceWidth / 2,
    borderRadius: 30,
    height: 25,
    borderColor: '#35b3cc',
    marginRight: 5

  },
  linearGradient: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    width: deviceWidth / 2
  },
  buttonLogin: {
    marginTop: 15,
    height: 70,
    backgroundColor: '#91cc1b',
    borderBottomWidth: 5,
    borderBottomColor: '#7BAE14'
  },
  scrollStyle: {
    backgroundColor: 'rgb(53, 179, 204)',
  },
  container: {
    flex: 1,
  	position: 'relative',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  aboutBody: {
    fontSize: 20,
    marginBottom: 10,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
export default styles;
