//Globel Importing
import React, { Component } from "react";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

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
import './Evo-Test-Design.scss';
import { Summary, Orders } from '../../Redux/Actions/Actions'
import ProcessingLoader from "../../Helpers/ProessingLoader/ProessingLoader";
import TabLoader from "../../Helpers/TabLoader/TabLoader";
import Table from "../../Helpers/Tables/OrderTable/OrderTable";

const column =
  [
    { id: 1, coloumnName: "DATE & TIME", requestSort: 'sent_dt', getClassName: 'sent_dt' },
    { id: 2, coloumnName: "SUBJECT", requestSort: 'email', getClassName: 'email' },
    { id: 2, coloumnName: "COMMUNICATION TYPE", requestSort: 'type', getClassName: 'type' },
    { id: 2, coloumnName: "ORDER #", requestSort: 'order_id', getClassName: 'order_id' },
    { id: 2, coloumnName: "", requestSort: null, getClassName: null },
  ];

class EvoTestDesign extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  state = {
    value: '',
    isShowLoader: false,
    tabActive: 3,
    subtabActive: 1,
    tabsub_button: 1,
    isShowtabloader: false,
    nodata : false,
  };

  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  componentDidMount(): void {
    debugger;
    this.props.Summary();
    this.props.Orders();
  }

  //Open loader
  isOpenLoader() {
      this.setState({ isShowLoader: !this.state.isShowLoader })
      setTimeout(() => {
        this.setState({ isShowLoader: !this.state.isShowLoader });
      }, 1000);

  }

  HideLoader(){
    if(this.state.isShowLoader == true){
      this.setState({ isShowLoader: !this.state.isShowLoader });
    }
  }

  isOpenTabLoader(tabIndex) {
    debugger;
    this.setState({ isShowtabloader: !this.state.isShowtabloader })
    setTimeout(() => {
      this.setState({ isShowtabloader: !this.state.isShowtabloader })
      this.setState({ tabActive: tabIndex });
    }, 2000);
  }
  isOpenSubTabs(subtabIndex) {
    this.setState({ isShowtabloader: !this.state.isShowtabloader })
    setTimeout(() => {
      this.setState({ isShowtabloader: !this.state.isShowtabloader })
      this.setState({ subtabActive: subtabIndex });
      this.setState({ nodata : !this.state.nodata});
    }, 2000);

  }

  render() {
    return (
      <div>
        {this.state.isShowLoader == true ?
          <div><ProcessingLoader /><img src={clos_icn} className="close_icn" onClick={()=>this.HideLoader()}/>{this.state.isShowLoader}</div> : null
        }

        {/* =============== Header start =============== */}
        <div className="header">
          <div className="name">
            <img src={IMG_star} />
            <p>{this.props.summary?.data?.first_name} {this.props.summary?.data?.last_name}</p>
          </div>
          <div className="flex_grow1"></div>
          <div className="header_btn">
            <button className="new_order_btn" onClick={() => this.isOpenLoader()}>New Order</button>
          </div>
        </div>
        {/* =============== Header End =============== */}

        {/* =============== Grid start =============== */}
        <div className="grid_container">
          <div className="grid_container_row">
            <div className="user_profile">
              <img src={IMG_user} />
              <p>{this.props.summary?.data?.gender} - {(new Date().getFullYear()) - (this.props.summary?.data?.birth_date.substring(0, 4))}</p>
            </div>
          </div>
          <div className="grid_container_row">
            <div className="user_contact_details">
              <ul>
                <li><img src={IMG_Prouser} /><div className="content">#{this.props.summary?.data?.id}</div>  </li>
                <li><img src={IMG_SmartPhone} /><div className="content">{this.props.summary?.data?.home_phone}</div>  </li>
                <li><img src={IMG_Appartments} /><div className="content">{this.props.summary?.data?.mobile_phone}</div>  </li>
                <li><img src={IMG_Home} /><div className="content">{this.props.summary?.data?.work_phone}</div>  </li>
                <li><img src={IMG_Arroba} /><div className="content">{this.props.summary?.data?.email}</div>  </li>
              </ul>
            </div>
          </div>
          <div className="grid_container_row" style={{ padding: '0px' }}>
            <div className="communication_activity_body">
              <div className="title">90-DAY COMMUNICATION ACTIVITY</div>
              <div className="content">
                <div className="card border_right_1_white">
                  <div className="number">{this.props.summary?.data?.activity?.sms}</div>
                  <div className="data">sms</div>
                </div>
                <div className="card border_right_1_white">
                  <div className="number">{this.props.summary?.data?.activity?.email}</div>
                  <div className="data">email</div>
                </div>
                <div className="card">
                  <div className="number">{this.props.summary?.data?.activity?.orders}</div>
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
                  <div className="number">{this.props.summary?.data?.carrier_status?.status}</div>
                  <div className="data" style={{ backgroundColor: '#D5E5D5' }}>since   {(this.month[new Date(this.props.summary?.data?.carrier_status?.since).getMonth()]) + ' ' + (new Date(this.props.summary?.data?.carrier_status?.since).getDate()) + ', ' + (new Date(this.props.summary?.data?.carrier_status?.since).getFullYear())} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Grid end =============== */}


        {/* =============== Tab Start =============== */}
        <div className="tab_body">
          <ul>
            <li onClick={() => this.isOpenTabLoader(1)} className={this.state.tabActive == 1 ? 'active_tab' : null}>Orders A</li>
            <li onClick={() => this.isOpenTabLoader(2)} className={this.state.tabActive == 2 ? 'active_tab' : null}>Orders AA</li>
            <li onClick={() => this.isOpenTabLoader(3)} className={this.state.tabActive == 3 ? 'active_tab' : null}>Orders AAA</li>
            <li onClick={() => this.isOpenTabLoader(4)} className={this.state.tabActive == 4 ? 'active_tab' : null}>Orders B</li>
            <li onClick={() => this.isOpenTabLoader(5)} className={this.state.tabActive == 5 ? 'active_tab' : null}>Orders C</li>
          </ul>
        </div>
        <div className="tab_content">
          {this.state.tabActive == 1 &&
            <div>
             {this.state.isShowtabloader == true ?
                <TabLoader /> : null
              }
              <div className="recent_orders">
                <button className={this.state.tabsub_button && this.state.subtabActive == 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(1)}>Sent</button>
                <button className={this.state.tabsub_button && this.state.subtabActive == 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(2)}>Errors</button>
                <div className="title">RECENT ORDERS</div>
              </div>
              <div className="no_data">No items</div>

            </div>
          }
          {this.state.tabActive == 2 &&
            <div>
               {this.state.isShowtabloader == true ?
                <TabLoader /> : null
              }
              <div className="recent_orders">
              <button className={this.state.tabsub_button && this.state.subtabActive == 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(1)}>Sent</button>
                <button className={this.state.tabsub_button && this.state.subtabActive == 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(2)}>Errors</button>
                <div className="title">RECENT ORDERS</div>
              </div>
                <div className="no_data">No items</div>
            </div>
          }
          {this.state.tabActive == 3 &&
            <div>
             {this.state.isShowtabloader == true ?
                <TabLoader /> : null
              }
              <div className="recent_orders">
              <button className={this.state.tabsub_button && this.state.subtabActive == 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(1)}>Sent</button>
                <button className={this.state.tabsub_button && this.state.subtabActive == 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(2)}>Errors</button>
                
                {!this.state.tabsub_button && !this.props.orders?.data?.orders_AAA?.sent &&
                <div className="title">RECENT ORDERS</div>
                }
              </div>
              {(this.state.tabsub_button == 1 && this.props.orders?.data?.orders_AAA?.sent && this.state.subtabActive !== 2 &&
                <Table products={this.props.orders?.data?.orders_AAA?.sent} column={column} />)
              }
              {this.state.subtabActive === 2 &&
                <div className="no_data">No items</div>
              }
            </div>
          }
          {this.state.tabActive == 4 &&
            <div>
           {this.state.isShowtabloader == true ?
                <TabLoader /> : null
              }
              <div className="recent_orders">
              <button className={this.state.tabsub_button && this.state.subtabActive == 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(1)}>Sent</button>
                <button className={this.state.tabsub_button && this.state.subtabActive == 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(2)}>Errors</button>
                <div className="title">RECENT ORDERS</div>
              </div>
              <div className="no_data">No items</div>
            </div>
          }
          {this.state.tabActive == 5 &&
            <div>
             {this.state.isShowtabloader == true ?
                <TabLoader /> : null
              }
              <div className="recent_orders">
              <button className={this.state.tabsub_button && this.state.subtabActive == 1 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(1)}>Sent</button>
                <button className={this.state.tabsub_button && this.state.subtabActive == 2 ? 'button_active tab_btn' : 'tab_btn'} onClick={() => this.isOpenSubTabs(2)}>Errors</button>
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
}

// redux-saga  start
export const mapStateToProps = (state: { GetSummaryReducer: any; GetOrderReducer: any; }) => {
  return {
    summary: state.GetSummaryReducer,
    orders: state.GetOrderReducer,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      Summary,
      Orders,
    },
    dispatch
  );
};

// redux-saga  start

export default connect(mapStateToProps, mapDispatchToProps)(EvoTestDesign);