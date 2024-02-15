import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';
import { useState } from 'react';

function FormHolder() {

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        const arr: any = Array.from(form);
        

        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        
        
        const summaryInfo = 
        {
            "ФИО": `${arr[0].value}`,
            "Должность, ученая степень, звание, кафедра, департамент/центр": `${arr[1].value}`,
            "Страна(ы) прибытия": `${arr[2].value}`,
            "Город (а)": `${arr[3].value}`,
            "Наименование принимающего образовательного/научного учреждения, организации, компании, фирмы": `${arr[4].value}`,
            "Сроки командирования": `${arr[5].value} - ${arr[6].value}`,
            "Цели командирования": `${arr[7].value}`,
            "Результаты командирования:": `${arr[8].value}`,
            "Достигнутые договоренности:": `${arr[9].value}`,
            "Подписанные договоры, контракты и пр. с указанием ФИО, должности и места работы партнеров (при наличии):": `${arr[10].value}`,
            "Контакты новых партнеров (при наличии):": `${arr[11].value}`,
            "Ссылки на публикации о мероприятии (новости) на Интернет-ресурсах, в социальных сетях (при наличии)": `${arr[12].value}`,
            "Предложения по развитию международных связей с организациями зарубежной страны / зарубежных стран (страны командирования):": `${arr[13].value}`,
            "Сведения о статусе и функционировании русского языка в стране/регионе/городе командирования, новых открывшихся образовательных организациях (кафедрах, отделениях), занимающихся обучением РКИ, проведенных или планируемых к проведению мероприятиях, посвященных русскому языку, и др": `${arr[14].value}`,
            "Иные сведения (условия проживания и питания в случае размещения на базе зарубежного партнера, качество работы интернета, техническая оснащённость принимающей стороны и пр.)": `${arr[15].value}`
        }

        console.log(`${arr[13].value}`);

        // const config = {
        //         headers: {
        //           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        //         },
        //         //cors: "no-cors", <- это неправильно
        //         mode: "cors", //<- оставим по 
        // }
        // axios.post("https://script.google.com/macros/s/AKfycbzvlnMeYqEfrfI5IWR6v8BRO2nn0b4i3nL2V-mj3f6YX5GcHH5xnujOVc1crOA_Re15/exec",
        // summaryInfo, config)
        // .then((response) => {
        //     console.log('Данные успешно отправлены:', response.data);
        // })
        // .catch((error) => {
        //     console.error('Ошибка при отправке данных:', error);
        // });

        await fetch("https://script.google.com/macros/s/AKfycbzvlnMeYqEfrfI5IWR6v8BRO2nn0b4i3nL2V-mj3f6YX5GcHH5xnujOVc1crOA_Re15/exec", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            mode: "cors",
            body: JSON.stringify(summaryInfo),
          })
            .then((res) => res.json())
            .catch((err) => console.log(err))
            
        setValidated(true);
    }

    return ( 
        <Form noValidate className='row' validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="col-12 mb-3" controlId="fio">
                <Form.Label>ФИО</Form.Label>
                <Form.Control type="text" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="position">
                <Form.Label>Должность, ученая степень, звание, кафедра, департамент/центр</Form.Label>
                <Form.Control type="text" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="countryArrived">
                <Form.Label>Страна(ы) прибытия</Form.Label>
                <Form.Control type="text" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="city">
                <Form.Label>Город (а)</Form.Label>
                <Form.Control type="text" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="nameOfHost">
                <Form.Label>Наименование принимающего образовательного/научного учреждения, организации, компании, фирмы</Form.Label>
                <Form.Control type="text" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="dateRange">
                <Form.Label>Сроки командирования</Form.Label>
                <Form.Group className='mb-2'>
                    <Form.Label className='mr-2'>С </Form.Label>
                    <Form.Control type="date" name="" id="" required/>
                    <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>По </Form.Label>
                    <Form.Control type="date" name="" id="" required/>
                    <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
                </Form.Group>
               
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="goal">
                <Form.Label>Цели командирования</Form.Label>
                <Form.Control as="textarea" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="results">
                <Form.Label>Результаты командирования:</Form.Label>
                <Form.Control as="textarea" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="reachedAgreements">
                <Form.Label>Достигнутые договоренности:</Form.Label>
                <Form.Control as="textarea" placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Поле обязтельное к заполнению
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="agreement">
                <Form.Label>Подписанные договоры, контракты и пр. с указанием ФИО, должности и места работы партнеров (при наличии):</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="contacts">
                <Form.Label>Контакты новых партнеров (при наличии):</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="urls">
                <Form.Label>Ссылки на публикации о мероприятии (новости) на Интернет-ресурсах, в социальных сетях (при наличии)</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="photo">
                <Form.Label>Фото, презентации, иные материалы (при наличии)</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="developmentProposals">
                <Form.Label>Предложения по развитию международных связей с организациями зарубежной страны / зарубежных стран (страны командирования):</Form.Label>
                <Form.Control as="textarea" placeholder="" required/>
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="status">
                <Form.Label>Сведения о статусе и функционировании русского языка в стране/регионе/городе командирования, новых открывшихся образовательных организациях (кафедрах, отделениях), занимающихся обучением РКИ, проведенных или планируемых к проведению мероприятиях, посвященных русскому языку, и др</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Form.Group className="col-12 mb-3" controlId="other">
                <Form.Label>Иные сведения (условия проживания и питания в случае размещения на базе зарубежного партнера, качество работы интернета, техническая оснащённость принимающей стороны и пр.)</Form.Label>
                <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">Отправить</Button>
        </Form>

        
     );
}

export default FormHolder;