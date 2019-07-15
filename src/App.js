import React from 'react';
// import connect from '@vkontakte/vkui-connect';
import connect from '@vkontakte/vkui-connect-mock';
import vkuiConnect from '@vkontakte/vkui-connect';
import { View, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from './panels/js/Main';
import Panel1 from './panels/js/Panel1';
import Panel2 from './panels/js/Panel2';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'main', // активная панель
			history: ['main'], // история переходов для свайпа на iOS
			loadApp: false,
			fetchedUser: null,
			showMenu: false,
		};
	}

	// метод для открытия/закрытия меню
	chMenu = () => {
		this.setState({ showMenu: !this.state.showMenu });
	}

	componentDidMount() {
		// прослушавие событий изменеий истории аппы, нужен для нормальной работы нативной кнопки назад на android
		window.addEventListener('popstate', (event) => {
			console.log("назад")
			const his = [...this.state.history];
			his.pop();
			const active = his[his.length - 1];
			if (active === 'main') {
				vkuiConnect.send('VKWebAppDisableSwipeBack');
			}
			this.setState({ history: his, activePanel: active });
		}, false);
		/////////////////////////////////////////////////////////////
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					setTimeout(()=>{this.setState({ fetchedUser: e.detail.data, loadApp: true });},500)					
					break;
				default:
					console.log(e.detail.type);
			}
		});
		vkuiConnect.subscribe((e) => {
			switch (e.detail.type) {
				default:
					console.log("qwe ", e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#3D3D3D" });

	}

	// метод удаления перехода из истории аппы
	goBack = () => {
		window.history.back();
	}

	// метод добавления перехода из истории аппы
	goForward = (activePanel) => {
		const history = [...this.state.history];
		history.push(activePanel);
		if (this.state.activePanel === 'main') {
			vkuiConnect.send('VKWebAppEnableSwipeBack');
		}
		window.history.pushState({}, '', activePanel)

		this.setState({ history, activePanel });
	}


	render() {
		if (this.state.loadApp) {
			
			return (
				<ConfigProvider>
					
					<View
						activePanel={this.state.activePanel}
						history={this.state.history}
						onSwipeBack={this.goBack} // для свайпа на iOS
					>
						
						<Main
							fetchedUser={this.state.fetchedUser}
							id="main"
							goBack={this.goBack}
							goForward={this.goForward}
						/>
					</View>
				</ConfigProvider>
			);
		} else {
			return (
				<div>Loading ...</div>
			);
		}
	}
}

export default App;
