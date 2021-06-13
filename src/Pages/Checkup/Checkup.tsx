import dateFormat from "dateformat";
import { useState } from "react";
import { Company, StatusCompany, TypeCompany } from "../../types/types"
import './Checkup.scss'
import { ReactComponent as ImgAddUser } from '../../assets/icons/btn_add_user.svg';
import { ReactComponent as ImgEdit } from '../../assets/icons/btn_edit.svg';
import { ReactComponent as ImgStart } from '../../assets/icons/btn_start.svg';
import { ReactComponent as ImgCycle } from '../../assets/icons/cycle.svg';
import { ReactComponent as ImgStop } from '../../assets/icons/btn_stop.svg';
/**
 * params:
 * @сompamy = object Company {
 *  - id
 *  - type: TypeCompany
 *  - dateFrom
 *  - dateTo
 *   - status: StatusCompany
 *   -  
 * }
 * 
 * 
 */


const CheckupPage = (params: any) => {
    const [showSettings, setShowSettings] = useState(false);
    const company: Company = params.company;
    console.log(showSettings);

    return (
        <div className="checkup-c">
            <header className="header">
                <div className="company">
                    <div className="title">{`Кампания № ${company.id}`}</div>
                    <div className="type">
                        <div className="img"><ImgCycle /></div>
                        <div className="text">{company.type}</div>
                    </div>
                    <div className="date">{`${dateFormat(company.dateFrom, "dd mmmm yyyy")} - ${dateFormat(company.dateTo, "dd mmmm yyyy")}`}</div>
                    {!showSettings ? <div className="settings"><a href='#' onClick={() => setShowSettings(true)}>Технические настройки</a></div>
                        :
                        <div className="settings"><a href='#' onClick={() => setShowSettings(false)}>Скрыть настройки</a></div>
                    }
                    {showSettings ?
                        <div className="settings-details">
                            <hr />
                            <div className="columns">
                                <div>
                                    <div>{company.days}</div>
                                    <div>{company.time}</div>
                                </div>
                                <div>
                                    <div>Длинна блока <span>{company.lengthBlock}</span></div>
                                    <div>Количество выходов в блоке <span>{company.countOutputs}</span></div>
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
                <div className='right'>
                    {company.status === StatusCompany.working ? <div className='text active'>Компания активна</div> : null}
                    {company.status === StatusCompany.stopped ? <div className='text stopped'>Компания не запущена</div> : null}

                    <div className='buttons'>
                        {company.status === StatusCompany.working ? <button className="btn stop" ><ImgStop /><span>Приостановить</span></button> : null}
                        {company.status === StatusCompany.stopped ? <button className="btn start" ><ImgStart /><span>Запустить</span></button> : null}
                        <button className="btn edit" > < ImgEdit /></button>
                        <button className="btn add" > < ImgAddUser /></button>
                    </div>
                </div>
            </header>

            <body>
                body
            </body>
            <footer>
                footer
            </footer>
        </div>
    );


}

export default CheckupPage;