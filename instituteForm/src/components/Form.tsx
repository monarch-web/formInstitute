import Form from 'react-bootstrap/Form';
import 'rsuite/DateRangePicker/styles/index.css';
// import 'rsuite/dist/rsuite.min.css';
import { DateRangePicker } from 'rsuite';
function FormHolder() {
    return ( 
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ФИО</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Должность, ученая степень, звание, кафедра, департамент/центр</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Страна(ы) прибытия</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Город (а)</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Наименование принимающего образовательного/научного учреждения, организации, компании, фирмы</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Сроки командирования</Form.Label>
                <DateRangePicker />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Цели командирования</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Результаты командирования:</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Достигнутые договоренности:</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Подписанные договоры, контракты и пр. с указанием ФИО, должности и места работы партнеров (при наличии):</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Контакты новых партнеров (при наличии):</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ссылки на публикации о мероприятии (новости) на Интернет-ресурсах, в социальных сетях (при наличии)</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Фото, презентации, иные материалы (при наличии)</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Предложения по развитию международных связей с организациями зарубежной страны / зарубежных стран (страны командирования):</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Сведения о статусе и функционировании русского языка в стране/регионе/городе командирования, новых открывшихся образовательных организациях (кафедрах, отделениях), занимающихся обучением РКИ, проведенных или планируемых к проведению мероприятиях, посвященных русскому языку, и др</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Иные сведения (условия проживания и питания в случае размещения на базе зарубежного партнера, качество работы интернета, техническая оснащённость принимающей стороны и пр.)</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
        </Form>
     );
}

export default FormHolder;