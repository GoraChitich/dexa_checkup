import dateFormat from "dateformat";
import { Company, StatusCompany, TypeCompany } from "../../types/types"
import './Checkup.scss'
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
    const company: Company = params.company;
    return (
        <div className="checkup-c">
            <header className="header">
                <div className="company">
                    <div className="title">{`Кампания № ${company.id}`}</div>
                    <div className="type"><div>0</div>
                        <div>{company.type}</div>
                    </div>
                    <div className="date">{`${dateFormat(company.dateFrom, "dd mmmm yyyy")} - ${dateFormat(company.dateTo, "dd mmmm yyyy")}`}</div>
                    <div className="settings"><a href='#'>Технические настройки</a></div>
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