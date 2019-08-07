import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, ConfigProvider, ScreenSpinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from './panels/js/Main';
import axios from 'axios';
import Panel1 from './panels/js/Panel1';
import base64 from 'base-64';
import './App.css';
import { Offline, Online } from "react-detect-offline";
import lost from "./img/lost.png";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'main', // активная панель
			history: ['main'], // история переходов для свайпа на iOS
			loadApp: false,
			fetchedUser: null,
			showMenu: false,
			sum: '',
			order_id: '',
			krada: '',
			failPay: false,
			desktop_web: false
		};
		this.payOrder = this.payOrder.bind(this);
		this.handleModal = this.handleModal.bind(this);
		
	}

	// метод для открытия/закрытия меню
	chMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
	}

	componentDidMount() {
		/* Получение защищенной строки */
		let krada = null;
		let ccc;
		const self = this;
	
		const paresedQuery = this.parseQueryString(window.location.search);
		let str = "https://cases.irsib.pro/?";
		Object.keys(paresedQuery).forEach(function (key) {
			 str = str + key + "=" + paresedQuery[key]+"&";
			 if(paresedQuery[key] === 'desktop_web'){
				ccc = true;
				console.log(ccc);
				self.setState({desktop_web: ccc});
			 } 
		});
		str = str.substring(0, str.length - 1);         
		krada = str;

		/***************************/

		// когда получена защищенная строка
		if(krada){
			this.setState({ krada: krada});
			connect.send('VKWebAppGetUserInfo', {});                     
		}
		// прослушавие событий изменеий истории аппы, нужен для нормальной работы нативной кнопки назад на android
		window.addEventListener('popstate', (event) => {
			console.log("назад")
			const his = [...this.state.history];
			his.pop();
			const active = his[his.length - 1];
			if (active === 'main') {
				connect.send('VKWebAppDisableSwipeBack');
			}
			this.setState({ history: his, activePanel: active });
		}, false);
		/////////////////////////////////////////////////////////////
		
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					setTimeout(()=>{this.setState({ fetchedUser: e.detail.data, loadApp: true });},500)					
					break;
				case 'VKWebAppOpenPayFormResult':
					console.log(e.detail);

					const { fetchedUser, order_id, krada, desktop_web } = this.state;
					let status = desktop_web ? e.detail.data.status : e.detail.data.result.status;   
					const sumVk = desktop_web ? e.detail.data.amount : e.detail.data.result.amount;
					 
					if(status) {
						this.setState({ failPay: false });
						const params = new URLSearchParams();
						params.append('id',             fetchedUser.id);
						params.append('order_id',       order_id);
						params.append('sum',    		sumVk);
						params.append('krada',    		krada);
						
						axios.post('https://cases.irsib.pro/backend/user/create.php', params,
						{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
						.then( res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						});

					}else {
						console.log('status pay fail');
						this.setState({ failPay: true });
					}
						
					break;
				case 'VKWebAppOpenPayFormFailed':
					this.setState({ failPay: true })
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		// connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#3D3D3D" });

	}
	// генерация строки проверки
	parseQueryString = (string) => {
		return string.slice(1).split('&')
				.map((queryParam) => {
						let kvp = queryParam.split('=');
						return {key: kvp[0], value: kvp[1]}
				})
				.reduce((query, kvp) => {
						query[kvp.key] = kvp.value;
						return query
				}, {})
	};

	// метод удаления перехода из истории аппы
	goBack = () => {
		window.history.back();
	}

	handleModal = (e) => {
		e.preventDefault();
        this.setState({ failPay: false });
    }

	// метод добавления перехода из истории аппы
	goForward = (activePanel) => {
		const history = [...this.state.history];
		history.push(activePanel);
		if (this.state.activePanel === 'main') {
			connect.send('VKWebAppEnableSwipeBack');
		}
		window.history.pushState({}, '', activePanel)

		this.setState({ history, activePanel });
	}

	payOrder = (sum, order_id) => {
		var self = this.state.fetchedUser.id;
		this.setState({sum: sum, order_id: order_id});
		axios.get('https://cases.irsib.pro/backend/getPay.php', {
			params: {
				api: 'getOrderId',
				user_id: self,
				sum: this.state.sum
			}
		}).then(function (response) {
			var order_id = response.data.order_id;
			var amount = response.data.amount;
			var ts = + new Date();
			var merchant_data = base64.encode(JSON.stringify({"amount":amount,"currency":"RUB","order_id":order_id,"ts":ts}));
			axios.get('https://cases.irsib.pro/backend/getPay.php', {
				params: {
					api: 'getVKpaySign',
					data: merchant_data
				}
			}).then(function (response) {
				merchant_data = response.data.merchant_data;
				var merchant_sign = response.data.merchant_sign;
				var merchant_id = response.data.merchant_id;
				var description = response.data.description;
				var app_data = 'amount='+amount+'data={"currency":"RUB","merchant_data":"'+merchant_data+'","merchant_sign":"'+merchant_sign+'","order_id":"'+order_id+'","ts":'+ts+'}description='+description+'merchant_id='+merchant_id+'version=2';
				axios.get('https://cases.irsib.pro/backend/getPay.php', {
					params: {
						api: 'getVKpayAppSign',
						data: app_data,
						user_id: self
					}
				}).then(function (response) {
					connect.send("VKWebAppOpenPayForm", {
						"app_id": 7071801,
						"action": "pay-to-service",
						"params": {
							"amount": amount,
							"description": description,
							"action": "pay-to-service",
							"merchant_id": merchant_id,
							"version": 2,
							"sign": response.data.app_sign,
							"data": {
								"currency": "RUB",
								"merchant_data": merchant_data,
								"merchant_sign": merchant_sign,
								"order_id": order_id,
								"ts": ts
							}
						}
					});
				});
			});
		});
	}
	


	render() {
		if (this.state.loadApp) {
			
			
			return (
				<div>
					<Online>
						<ConfigProvider>
							
							<View
								activePanel={this.state.activePanel}
								history={this.state.history}
								onSwipeBack={this.goBack} // для свайпа на iOS
							>
								
								<Main
									fetchedUser={this.state.fetchedUser}
									id="main"
									payOrder={this.payOrder}
									goBack={this.goBack}
									goForward={this.goForward}
									chMenu={this.chMenu}
									failPay={this.state.failPay}
									handleModal={this.handleModal}
								/>
								<Panel1
									fetchedUser={this.state.fetchedUser}
									id="Panel1"
									goBack={this.goBack}
									goForward={this.goForward}
									chMenu={this.chMenu}
								/>
							</View>
						</ConfigProvider>
					</Online>
					<Offline>
						<div className="lost-connection">
							<img src={lost} alt=''/>
							<p>Ох! Похоже, интернет соединение было потеряно...</p>	
						</div>
					</Offline>
				</div>
			);
		} else {
			return (
				<ScreenSpinner />
			);
		}
	}
}

export default App;
