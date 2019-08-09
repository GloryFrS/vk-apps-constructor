import React from 'react';
import { Button } from '@vkontakte/vkui';

function ModalInfo(props) {
  return props.isOpen ? (
    <div className='modal'>
        <div className='modal-content__info'>
          <div className='container'>
              <p>1. Все чехлы силиконовые, картинка печатается на задней части, боковые части могут быть трех цветов: <span>прозрачный</span>, <span>белый</span>, <span>черный</span>.</p> <p> Укажите цвет боковой части в форме заказа в поле "цвет боковой части".</p>
              <p>2. Если Вы не нашли в списке свою модель телефона, то выберите "любой другой телефон", затем сделайте нужный Вам дизайн чехла и при формировании заказа укажите в поле "модель телефона" вашу модель.</p>
              <p>3. Модель чехла на картинке может не совпадать с реальной моделью, но не переживайте, указав модель телефона в форме заказа Вы получите чехол для Вашего телефона.</p>
              <p>Вопросы можете задать<br/> в <span>WhatsApp</span> / <span>Viber</span> / <span>Telegram</span> <br/> на номер <a href="tel:+7-923-434-48-42" target="_blank" rel="noopener noreferrer">+7-923-434-48-42</a></p>
              <p>ИП <span>Глушков Семен Андреевич</span><br />
              ОГРНИП <span>316547600156364</span><br />
              ИНН <span>541003174020</span><br />
              Свидетельство о регистрации ИП: <span>54 005149884</span>, дата выдачи 25.08.2016, кем выдано: <span>Межрайонная инспекция Федеральной налоговой службы №16 по Новосибирской области</span><br />
              Адрес: 630129, г. Новосибирск, ул. Рассветная, дом 14, кв. 28<br />
              р/с <span>№40802810944050007775</span>, <br />
              Наименование банка: <span>СИБИРСКИЙ БАНК ПАО СБЕРБАНК Г. НОВОСИБИРСК</span><br />БИК <span>045004641</span>, <br />кор.счет <span>№30101810500000000641</span></p>
              <Button size="xl" onClick={ (e) => props.toggle(e) } level="commerce">Прочитал</Button>
          </div>
        </div>
    </div>
  ) : null;
}
function ModalSucPay(props) {
  return props.status ? (
    <div className='modal'>
        <div className='modal-content__success'>
          <div className='container'>
              <h3>ОПЛАТА ПРОШЛА УСПЕШНО!<br/> БЛАГОДАРИМ ЗА ПОКУПКУ! <br/> </h3> 
              <p>Наш менеджер свяжется с Вами в самое ближайшее время</p>
              <Button size="xl" onClick={ (e) => props.handleModal(e) }  level="commerce">Ок</Button>
          </div>
        </div>
    </div>
  ) : null;
}


export { ModalInfo, ModalSucPay };