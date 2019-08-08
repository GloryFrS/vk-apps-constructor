import React from 'react';
import { Panel, PanelHeader, HeaderButton, platform } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // componentDidMount() {
	// 	connect.send("VKWebAppSetViewSettings", { "status_bar_style": "dark", "action_bar_color": "#3D3D3D" });
    // }

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={() => { this.props.goBack() }} data-to="home">
                        {osname === "ios" ? <Icon28ChevronBack /> : <Icon24Back />}
                    </HeaderButton>}
                >
                    Информация
                </PanelHeader>
                <div className='container'>
                    <p>1. Все чехлы силиконовые, картинка печатается на задней части, боковые части могут быть трех цветов: <span>прозрачный</span>, <span>белый</span>, <span>черный</span>.</p> <p> Укажите цвет боковой части в форме заказа в поле "цвет боковой части".</p>
                    <p>2. Если Вы не нашли в списке свою модель телефона, то выберите "любой другой телефон", затем сделайте нужный Вам дизайн чехла и при формировании заказа укажите в поле "модель телефона" вашу модель.</p>
                    <p>3. Модель чехла на картинке может не совпадать с реальной моделью, но не переживайте, указав модель телефона в форме заказа Вы получите чехол для Вашего телефона.</p>
                    <p>Вопросы можете задать<br/> в <span>WhatsApp</span> / <span>Viber</span> / <span>Telegram</span> <br/> на номер <a href="tel:+7-923-434-48-42" target="_blank" without rel="noopener noreferrer">+7-923-434-48-42</a></p>
                    <p>ИП <span>Глушков Семен Андреевич</span><br />
                    ОГРНИП <span>316547600156364</span><br />
                    ИНН <span>541003174020</span><br />
                    Свидетельство о регистрации ИП: <span>54 005149884</span>, дата выдачи 25.08.2016, кем выдано: <span>Межрайонная инспекция Федеральной налоговой службы №16 по Новосибирской области</span><br />
                    Адрес: 630129, г. Новосибирск, ул. Рассветная, дом 14, кв. 28<br />
                    р/с <span>№40802810944050007775</span>, <br />
                    Наименование банка: <span>СИБИРСКИЙ БАНК ПАО СБЕРБАНК Г. НОВОСИБИРСК</span><br />БИК <span>045004641</span>, <br />кор.счет <span>№30101810500000000641</span></p>
                   
                </div>

            </Panel>
        );
    }
}

export default Main;