import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Panel, PanelHeader } from '@vkontakte/vkui';


import '../css/Main.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount() {
        connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#87C2E7" });
        
        
        window.addEventListener( 'message', function(e){
            if( !e.data ) return;
            var parsed;
            try{ parsed = JSON.parse(e.data) } catch(err){ return }
            if( parsed.type !== 'cosuvOrder' ) return;
            window.location = 'https://www.robokassa.ru/ru/';
        });
        
    }

    handleOnclick = () => {
        
    }


    render() {
        return (
            
            <Panel id={this.props.id}> 
            <PanelHeader>Чехол сервис</PanelHeader> 
                <div className='containerFrame'>
                    <iframe src="https://cosuv.ru/app/3868" style={{ width:"100%",height:"100%",position:"relative"}} frameBorder="0" ></iframe>
                </div>
            </Panel>
        );
    }
}

export default Main;