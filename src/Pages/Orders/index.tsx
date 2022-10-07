//Globel Importing
import React, { useEffect, useState , FC, ReactElement} from 'react';
import { connect, useDispatch } from 'react-redux';

//Local Image Importing
import IMG_star from '../../Assets/Images/star.png'
import IMG_user from '../../Assets/Images/user.png'
import IMG_Prouser from '../../Assets/Images/Pro_user.png'
import IMG_SmartPhone from '../../Assets/Images/smartphone.png'
import IMG_Appartments from '../../Assets/Images/appartments.png'
import IMG_Home from '../../Assets/Images/home.png'
import IMG_Arroba from '../../Assets/Images/arroba.png'
import clos_icn from "../../Assets/Images/close.png";

//Local File Importing
import './index.scss';
import { Summary, Orders } from '../../Redux/Actions/Actions'
import ProcessingLoader from "../../Components/ProessingLoader/ProessingLoader";
import TabLoader from "../../Components/TabLoader/TabLoader";
import Table from "../../Components/Tables/OrderTable/OrderTable";
import { OrdersTableColumn, Month } from "../../constants";
import {OrderProps,SummaryProps } from '../../Interface/index'


type props = {
  summary: SummaryProps,
  orders: OrderProps,
}
const EvoTestDesign: FC<props>  = ({summary, orders}): ReactElement => {

  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [tabActive, setTabActive] = useState(3);
  const [subtabActive, setSubtabActive] = useState(1);
  const [tabsub_button, setTabsub_button] = useState(1);
  const [isShowtabloader, setIsShowtabloader] = useState(false);
  const [nodata, setNodata] = useState(false);



  useEffect(() => {
    dispatch(Summary());
    dispatch(Orders());
    console.log("Summary", summary);
    console.log("orders", orders);

  }, []);

  //Open loader
  const isOpenLoader = () => {
    setIsShowLoader(!isShowLoader);
    setTimeout(() => {
      setIsShowLoader(false);
    }, 1000);

  }

  const HideLoader = () => {
    if (isShowLoader === true) {
      setIsShowLoader(!isShowLoader);
    }
  }

  const isOpenTabLoader = (tabIndex) => {
    setIsShowtabloader(!isShowtabloader);
    setTimeout(() => {
      setIsShowtabloader(false);
      setTabActive(tabIndex)
      setSubtabActive(1);
    }, 2000);
  }

  const isOpenSubTabs = (subtabIndex) => {
    setIsShowtabloader(!isShowtabloader);
    setTimeout(() => {
      setIsShowtabloader(false);
      setSubtabActive(subtabIndex);
      setNodata(!nodata)
    }, 2000);

  }

  return (
    <div>
      {isShowLoader === true ?
        <div><ProcessingLoader /><img src={clos_icn} className="close_icn" onClick={() => HideLoader()} />{isShowLoader}</div> : null
      }

      {/* =============== Header start =============== */}
      <div className="header">
        <div className="name">
          <img src={IMG_star} />
          <p>{summary?.data?.first_name} {summary?.data?.last_name}</p>
        </div>
        <div className="flex_grow1"></div>
        <div className="header_btn">
          <button className="new_order_btn" onClick={() => isOpenLoader()}>New Order</button>
        </div>
      </div>
      {/* =============== Header End =============== */}

      {/* =============== Grid start =============== */}
      <div className="grid_container">
        <div className="grid_container_row">
          <div className="user_profile">
            <img src={IMG_user} />
            <p>{summary?.data.gender} - {(new Date().getFullYear()) - Number(summary?.data.birth_date?.substring(0, 4))}</p>
          </div>
        </div>
        <div className="grid_container_row">
          <div className="user_contact_details">
            <ul>
              <li><img src={IMG_SmartPhone} /><div className="content">{Number(summary?.data?.id)}</div>  </li>
              <li><img src={IMG_SmartPhone} /><div className="content">{summary?.data?.home_phone}</div>  </li>
              <li><img src={IMG_Appartments} /><div className="content">{summary?.data?.mobile_phone}</div>  </li>
              <li><img src={IMG_Home} /><div className="content">{summary?.data?.work_phone}</div>  </li>
              <li><img src={IMG_Arroba} /><div className="content">{summary?.data?.email}</div>  </li>
            </ul>
          </div>
        </div>
        <div className="grid_container_row" style={{ padding: '0px' }}>
          <div className="communication_activity_body">
            <div className="title">90-DAY COMMUNICATION ACTIVITY</div>
            <div className="content">
              <div className="card border_right_1_white">
                <div className="number">{Number(summary?.data.activity?.sms)}</div>
                <div className="data">sms</div>
              </div>
              <div className="card border_right_1_white">
                <div className="number">{Number(summary?.data.activity?.email)}</div>
                <div className="data">email</div>
              </div>
              <div className="card">
                <div className="number">{Number(summary?.data.activity?.orders)}</div>
                <div className="data">orders</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid_container_row" style={{ padding: '0px', backgroundColor: '#EDFFED' }}>
          <div className="communication_activity_body">
            <div className="title">90-DAY COMMUNICATION ACTIVITY</div>
            <div className="content">
              <div className="card">
                <div className="number">{summary?.data?.carrier_status?.status}</div>
                <div className="data" style={{ backgroundColor: '#D5E5D5' }}>since   {(Month[new Date(summary?.data?.carrier_status?.since).getMonth()]) + ' ' + (new Date(summary?.data?.carrier_status?.since).getDate()) + ', ' + (new Date(summary?.data?.carrier_status?.since).getFullYear())} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Grid end =============== */}


      {/* =============== Tab Start =============== */}
      <div className="tab_body">
        <ul>
          <li onClick={() => isOpenTabLoader(1)} className={tabActive === 1 ? 'active_tab' : null}>Orders A</li>
          <li onClick={() => isOpenTabLoader(2)} className={tabActive === 2 ? 'active_tab' : null}>Orders AA</li>
          <li onClick={() => isOpenTabLoader(3)} className={tabActive === 3 ? 'active_tab' : null}>Orders AAA</li>
          <li onClick={() => isOpenTabLoader(4)} className={tabActive === 4 ? 'active_tab' : null}>Orders B</li>
          <li onClick={() => isOpenTabLoader(5)} className={tabActive === 5 ? 'active_tab' : null}>Orders C</li>
        </ul>
      </div>
      <div className="tab_content">
        {tabActive === 1 &&
          <div>
            {isShowtabloader === true ?
              <TabLoader /> : null
            }
            <div className="recent_orders">
              <button className={tabsub_button && subtabActive === 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(1)}>Sent</button>
              <button className={tabsub_button && subtabActive === 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(2)}>Errors</button>
              <div className="title">RECENT ORDERS</div>
            </div>
            <div className="no_data">No items</div>

          </div>
        }
        {tabActive === 2 &&
          <div>
            {isShowtabloader === true ?
              <TabLoader /> : null
            }
            <div className="recent_orders">
              <button className={tabsub_button && subtabActive === 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(1)}>Sent</button>
              <button className={tabsub_button && subtabActive === 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(2)}>Errors</button>
              <div className="title">RECENT ORDERS</div>
            </div>
            <div className="no_data">No items</div>
          </div>
        }
        {tabActive === 3 &&
          <div>
            {isShowtabloader === true ?
              <TabLoader /> : null
            }
            <div className="recent_orders">
              <button className={tabsub_button && subtabActive === 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(1)}>Sent</button>
              <button className={tabsub_button && subtabActive === 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(2)}>Errors</button>

              {!tabsub_button && !orders?.data?.orders_AAA?.sent &&
                <div className="title">RECENT ORDERS</div>
              }
            </div>
            {(tabsub_button === 1 && orders?.data?.orders_AAA?.sent && subtabActive !== 2 &&
              <Table products={orders?.data?.orders_AAA?.sent} column={OrdersTableColumn} />)
            }
            {subtabActive === 2 &&
              <div className="no_data">No items</div>
            }
          </div>
        }
        {tabActive === 4 &&
          <div>
            {isShowtabloader === true ?
              <TabLoader /> : null
            }
            <div className="recent_orders">
              <button className={tabsub_button && subtabActive === 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(1)}>Sent</button>
              <button className={tabsub_button && subtabActive === 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(2)}>Errors</button>
              <div className="title">RECENT ORDERS</div>
            </div>
            <div className="no_data">No items</div>
          </div>
        }
        {tabActive === 5 &&
          <div>
            {isShowtabloader === true ?
              <TabLoader /> : null
            }
            <div className="recent_orders">
              <button className={tabsub_button && subtabActive === 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(1)}>Sent</button>
              <button className={tabsub_button && subtabActive === 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => isOpenSubTabs(2)}>Errors</button>
              <div className="title">RECENT ORDERS</div>
            </div>
            <div className="no_data">No items</div>
          </div>
        }
      </div>
      {/* =============== Tab Start =============== */}
    </div>
  )

}

// redux-saga  start
const mapStateToProps = (state) => ({
  summary: state.SummaryReducer,
  orders: state.OrderReducer,
});


export default connect(mapStateToProps)(EvoTestDesign);