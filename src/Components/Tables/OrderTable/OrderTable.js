import Arrow_down from '../../../Assets/Images/down-arrows.png'
import Arrow_up from '../../../Assets/Images/up-arrows.png'
import useSortableData from "../../Sorting/Sorting";
import './OrderTable.scss';

import { Month, DayString } from '../../../constants';

export default ({ products, column }) => {
    const { items, requestSortFn, sortConfig, } = useSortableData(products);

    const getSortClassName = name => {
        if (sortConfig && sortConfig.key && sortConfig.direction) {
            if (sortConfig.key === name) {
                return sortConfig.direction;
            }
            return undefined;
        }
    };


    return (
        <table>
            <thead>
                <tr>
                    {column && column.map(({ id, requestSort, getClassName, columnName }) => {
                        return (
                            <th
                                onClick={() => requestSortFn(requestSort)}
                                className={getSortClassName(getClassName)}
                                key={id}
                            >
                                {columnName}

                                {getSortClassName(getClassName) === 'ascending' &&
                                    <img src={Arrow_down} className="short_icn" />
                                }
                                {getSortClassName(getClassName) === 'descending' &&
                                    <img src={Arrow_up} className="short_icn" />
                                }
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {items.map(({ sent_dt, sent_tm, subject, type, order_id }, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <div className="date_frm">
                                    <div className="title">{(DayString[new Date(sent_dt).getDay()]) + ',' + (Month[new Date(sent_dt).getMonth()]) + ' ' + (new Date(sent_dt).getDate())}</div>
                                    <div className="sub_title">{(sent_tm.substring(0, 5)) + ' ' + (sent_tm.substring(0, 2) > 12 ? 'PM' : 'AM')}</div>
                                </div>
                            </td>
                            <td>
                                <div className="subject">
                                    <div className="title">{subject.title}</div>
                                    <div className="sub_title">{subject.email}</div>
                                </div>
                            </td>
                            <td>
                                <div className="date_frm">
                                    <div className="sub_title"> {type}</div>
                                </div>
                            </td>
                            <td>
                                <div className="date_frm">
                                    <div className="sub_title"> {Number(order_id)}</div>
                                </div>

                            </td>
                            <td><button className="resend_btn">Resend</button> </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
