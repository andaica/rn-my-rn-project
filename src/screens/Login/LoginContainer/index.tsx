// @flow
import * as React from "react";
import { Item, Form, Toast, Label, Container, Content, Icon, Button, Right } from "native-base";
import { observer, inject } from "mobx-react/native";
import { View, Text, TextInput } from "react-native";
import LoginScreen from "../";
import styles from "./styles";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Modal from "react-native-modal";




export interface Props {
	navigation: any;
	uiStore?: any;
	memberStore?:any;
}
export interface State { }

@inject('memberStore')
@inject('uiStore')
@observer
export default class LoginContainer extends React.Component<Props, State> {

	emailInput: any;
	pwdinput: any;
	state = {
		visibleModal: false,
		customStyleIndex: 0,
	};

	async login() {
		const data = this.props.memberStore;
		const { navigate } = this.props.navigation;
		this.props.uiStore.showLoadingScreen();
		let result = await this.props.memberStore.login(data.email,data.password);
		console.log("Login result: ", result);
		this.props.uiStore.hideLoadingScreen();
		if (result.status == 'OK') {
			data.clearDataLogin();
			navigate('Hello', { name: data.user.name });
			
		} else {
			Toast.show({
				text: "入力した予約番号は無効です。予約番号を再度確認の上",
				duration: 2000,
				position: "bottom",
				textStyle: { textAlign: "center", fontSize: 12 },
				type: "danger"
			});
		}

	}
	handleCustomIndexSelect = (index: number) => {
		this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
	}
	render() {
		const { customStyleIndex } = this.state;
		const form = this.props.memberStore;
		const Fields = (
			<View style={styles.container}>
				<SegmentedControlTab
					values={['面接・面談を受ける', 'マイページを見る']}
					selectedIndex={customStyleIndex}
					onTabPress={this.handleCustomIndexSelect}
					borderRadius={0}
					tabsContainerStyle={{ height: 50, borderWidth: 0 }}
					tabStyle={{ backgroundColor: '#f2f3f5', borderBottomWidth: 3, borderBottomColor: '#35b3cc', borderColor: '#f2f3f5' }}
					activeTabStyle={{ backgroundColor: '#35b3cc', borderTopColor: '#35b3cc', borderBottomWidth: 3, borderBottomColor: '#35b3cc' }}
					tabTextStyle={{ color: '#4a546f' }}
					activeTabTextStyle={{ color: 'white' }}
				/>
				{customStyleIndex === 0
					&& <Container style={{ marginTop: 20 }}>
						<Content >
							<Text style={styles.textcontent} >メールアドレスと予約時に発行された予約番号を入力してください。</Text>
							<Form style={styles.form} >
								<Label style={styles.label} >メールアドレス</Label>
								<View style={{ marginTop: 8 }} />
								<Item regular>
									<TextInput underlineColorAndroid="transparent" placeholderTextColor="rgb(164, 169, 183)" placeholder="メールアドレスを入力してください" style={styles.textInput}
										keyboardType="email-address"
										ref={c => (this.emailInput = c)}
										value={form.email}
										onChangeText={e => form.emailOnChange(e)}
									/>
								</Item>
								<View style={{ marginTop: 25 }} />
								<Label style={styles.label} >予約番号</Label>
								<View style={{ marginTop: 8 }} />
								<Item regular>
									<TextInput underlineColorAndroid="transparent" placeholderTextColor="rgb(164, 169, 183)" placeholder="面接番号を入力してください" style={styles.textInput}
										value={form.password}
										onChangeText={e => form.passwordOnChange(e)}
										secureTextEntry={true}
									/>
								</Item>
							</Form>
							<View style={{ position: 'relative' }}>
								<Right style={{ right: 10, marginLeft: 180 }}>
									<Button block style={styles.buttoninfo} bordered info onPress={() => { }}>
										<Label style={{ color: '#35b3cc', fontSize: 12 }}>パスワードをお忘れですか ？</Label>
									</Button>

								</Right>
							</View>
							<Button block style={styles.buttonLogin} onPress={() => this.login()}>
								<Text style={styles.textsign} >面接ルームに入室</Text>
								<Icon style={{ marginLeft: 300 }} name="chevron-with-circle-right" type='Entypo' />
							</Button>
							<View style={styles.footer}>
								<Label style={styles.textcontent}> 面接・面談日時の再設定は次のページでできます。 </Label>
								<Label style={{ fontSize: 12, color: '#4a546f' }} >© Blueagency,inc.</Label>
							</View>
						</Content>
					</Container>
				}
				{customStyleIndex === 1
					&& <Container style={{ marginTop: 20 }}>
						<Content >
							<Text style={styles.textcontent} >メールアドレスと予約時に発行された予約番号を入力してください。</Text>
							<Form style={styles.form} >
								<Label style={styles.label} >メールアドレス</Label>
								<View style={{ marginTop: 8 }} />
								<Item regular>
									<TextInput underlineColorAndroid="transparent" placeholderTextColor="rgb(164, 169, 183)" placeholder="メールアドレスを入力してください" style={styles.textInput}
										keyboardType="email-address"
										ref={c => (this.emailInput = c)}
										value={form.email}
										onChangeText={e => form.emailOnChange(e)}
									/>
								</Item>
								<View style={{ marginTop: 25 }} />
								<Label style={styles.label} >予約番号</Label>
								<View style={{ marginTop: 8 }} />
								<Item regular>
									<TextInput underlineColorAndroid="transparent" placeholderTextColor="rgb(164, 169, 183)" placeholder="パスワードを入力してください" style={styles.textInput}
										ref={c => (this.pwdinput = c)}
										value={form.password}
										onChangeText={e => form.passwordOnChange(e)}
										secureTextEntry={true}
									/>
								</Item>
							</Form>
							<View style={{ position: 'relative' }}>
								<Right style={{ right: 10, marginLeft: 180 }}>
									<Button block style={styles.buttoninfo} bordered info onPress={() => this.setState({ visibleModal: true })}>
										<Label style={{ color: '#35b3cc', fontSize: 12 }}>パスワードをお忘れですか ？</Label>
									</Button>
								</Right>
							</View>
							<Button block style={styles.buttonLogin} onPress={() => this.login()}>
								<Text style={styles.textsign} >マイページにログイン</Text>
								<Icon style={{ marginLeft: 300 }} name="chevron-with-circle-right" type='Entypo' />
							</Button>
							<View style={styles.footer}>
								<Label style={styles.textcontent}> マイページは、会員情報を確認できます。</Label>
								<Label style={{ fontSize: 12, color: '#4a546f' }} >© Blueagency,inc.</Label>
							</View>
						</Content>
					</Container>
				}

			</View>
		);
		return <LoginScreen loginForm={Fields} onLogin={() => this.login()} />;
	}
}
