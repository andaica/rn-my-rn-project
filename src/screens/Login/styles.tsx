import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
		height:deviceHeight,
	},
	shadow: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	bg: {
		flex: 1,
		marginTop: deviceHeight / 1.75,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30,
		bottom: 0
	},
	input: {
		marginBottom: 20,
	},
	btn: {
		marginTop: 20,
		alignSelf: "center",
	},
	imageHeader:{
		marginTop:10,
		width: 115,
		height: 35
	},
	footer:{
		alignItems: "center",
		opacity: 0.5,
		// flexDirection: "row"
	},
	textheader: {
		fontWeight: '900',
		fontSize: 20,
		paddingTop:20,
		paddingLeft:10,
		color:'#4a546f'
	  },
	body:{
		height: 150 ,
		backgroundColor: '#fff'
	},
	icon:{
		color: "#4a546f",
		paddingTop:20,
		paddingLeft:15,
		fontSize: 35
	
	},
	text: {
		bottom: 6,
		marginTop: 10,
		padding: 10,
		fontSize: 12,
		color: '#4a546f',
		lineHeight:25
	},
	textcontent: {
		padding: 12,
		fontSize: 12,
		lineHeight: 25,
		color: 'black'
	},
	label: {
		fontWeight: '500',
		fontSize: 12,
		color: 'black'
	},
	textsign:{
		position: "absolute",
		fontWeight: '900',
		fontSize: 18,
		color: '#fff'
	},
	content:{
		overflow: 'hidden'
	},
	buttoninfo:{
		width:  deviceWidth/4,
		borderRadius:30,
		height:30,
		borderColor:'#ffff',
		marginRight:3
		
	},
	linearGradient: {
		height:50,
		flexDirection:'row',
		paddingLeft: 15,
		paddingRight: 15,
	  },

});
export default styles;
