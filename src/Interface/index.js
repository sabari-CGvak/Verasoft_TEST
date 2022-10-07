export  type SummaryProps = {
    data:{
      id: Number,
      first_name: string,
      last_name: string,
      photo_url: string,
      gender: string,
      birth_date: string,
      home_phone: string,
      mobile_phone: string,
      work_phone: string,
      email: string,
      activity: {
          sms: Number,
          email: Number,
          orders: Number
      },
      carrier_status: {
          since: string,
          status: string
      }
    }
  }
  
 export type OrderProps = {
    data:{
      orders_A: [],
      orders_AA: [],
      orders_AAA: {
          sent: [
              {
                  id: Number,
                  order_id: Number,
                  sent_dt: string,
                  sent_tm: string,
                  subject: {
                      title: string,
                      email: string
                  },
                  type: string
              },
              {
                  id: Number,
                  order_id: Number,
                  sent_dt: string
                  sent_tm: string,
                  subject: {
                      title: string,
                      email: string
                  },
                  type: string
              }
          ]
      },
      orders_B: [],
      orders_C: []
    }  
  }