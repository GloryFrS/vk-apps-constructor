import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, PanelHeaderContent, HeaderButton } from '@vkontakte/vkui';
import Icon28Menu from '@vkontakte/icons/dist/28/menu';

import '../css/Main.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount() {
		connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#87C2E7" });
    }

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={
                        <HeaderButton>
                            <Icon28Menu onClick={this.props.chMenu}/>
                        </HeaderButton>
                    }
                >
                    <PanelHeaderContent
                    >
                        <div className="header-title">
                            <Avatar size={40} src={this.props.fetchedUser.photo_200} />
                            {this.props.fetchedUser.first_name}
                        </div>
                    </PanelHeaderContent>
                </PanelHeader>
                <div>
                    <iframe src="https://cosuv.ru/app/3868" style={{ width:"100%",height:"600px",position:"relative"}} frameBorder="0" ></iframe>
                </div>
            </Panel>
        );
    }
}

export default Main;