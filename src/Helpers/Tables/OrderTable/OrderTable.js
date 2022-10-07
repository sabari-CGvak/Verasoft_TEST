import React from "react";

import Arrow_down from '../../../Assets/Images/down-arrows.png'
import Arrow_up from '../../../Assets/Images/up-arrows.png'
import useSortableData from "../../Sorting/Sorting";
import './OrderTable.scss';


export default ({ products, column }) => {
    const { items, requestSort, sortConfig, } = useSortableData(products);
    const Column = column;

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayString = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const getClassName = name => {
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
                    {Column && Column.map(product => {
                        return (
                            <th
                                onClick={() => requestSort(product.requestSort)}
                                className={getClassName(product.getClassName)}
                            >
                                {product.coloumnName}

                                { getClassName(product.getClassName) === 'ascending' ?
                                    <img src={Arrow_down}  className="short_icn"/> : <img src={Arrow_up}   className="short_icn" />
                                }
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {items.map(product => {
                    return (
                        <tr key={product.index}>
                            <td>
                                <div className="date_frm">
                                    <div className="title">{(dayString[new Date(product.sent_dt).getDay()]) +',' +(month[new Date(product.sent_dt).getMonth()]) + ' ' + (new Date(product.sent_dt).getDate())}</div>
                                    <div className="sub_title">{(product.sent_tm.substring(0, 5)) + ' ' + (product.sent_tm.substring(0, 2) > 12 ? 'PM' : 'AM' )}</div>
                                </div>
                            </td>
                            <td>
                                <div className="subject">
                                    <div className="title">{product.subject.title}</div>
                                    <div className="sub_title">{product.subject.email}</div>
                                </div>
                            </td>
                            <td>{product.type}</td>
                            <td>{product.order_id}</td>
                            <td><button className="resend_btn">Resend</button> </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
