import React from 'react';
import { Panel, PanelHeader, HeaderButton, ScreenSpinner, Button } from '@vkontakte/vkui';
import '../css/Main.css';
import PropTypes from 'prop-types';
import infoIcon from '../../img/information.svg';
import ReactSVG from 'react-svg';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            modal: false,
            sum: null,
            order_id: null
        }
        
    }
    

    componentDidMount() {
        // connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#3D3D3D" });
        
        const { payOrder } = this.props;
        const self = this;
        window.addEventListener( 'message', function(e){
            if( !e.data ) return;
            var parsed;
            try{ parsed = JSON.parse(e.data) } catch(err){ return }
            if( parsed.type !== 'cosuvOrder' ) { return }
            self.setState({ sum: parsed.sum, order_id: parsed.id});
            payOrder(parsed.sum, parsed.id);
            
        });
    }

    hideSpinner = () => {
        setTimeout(() => { this.setState({ loading: false }); }, 200);
    };

    

    render() {
        const { sum, order_id } = this.state;
        const { payOrder, handleModal } = this.props;
        return (         
            <Panel id={this.props.id}> 
                <PanelHeader
                    left={
                        <HeaderButton>
                            <ReactSVG beforeInjection={svg => {
                                    svg.classList.add('pulse')
                                    svg.setAttribute('style', 'width: 25px; height:25px; margin-bottom: -5px;')
                                }}
                                src={infoIcon}
                                onClick={() => { this.props.chMenu()  ; this.props.goForward("Panel1") }} />
                        </HeaderButton>
                    }
                >
                    Конструктор чехлов 
                </PanelHeader>
                <div className='containerFrame'>
                    { this.props.failPay ? (
                        <div className='modal'>
                            <div className='modal-content'>
                                <h3>Внимание!<br/> Заказ не оплачен</h3> 
                    
                                <p>Выберите действия: </p>
                                <Button size="xl" onClick={ () => payOrder(sum, order_id) } level="1">Повторить оплату</Button><br/>
                                <Button size="xl" onClick={ (e) => handleModal(e) } level="secondary">Отменить заказ</Button>
                            </div>
                        </div>
                    ) : null }  

                    {this.state.loading ? (
                        <ScreenSpinner />
                        ) : null}
                    <iframe title="constructor" onLoad={this.hideSpinner} src="https://cosuv.ru/app/3868" style={{ width:"100%",height:"100%",position:"relative"}} frameBorder="0" ></iframe>
                </div>
            </Panel>
        );
    }
}

Main.propTypes = {
    payOrder: PropTypes.func,
    handleModal: PropTypes.func
  };

export default Main;