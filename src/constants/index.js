export const OrdersTableColumn =
  [
    { id: 1, columnName: "DATE & TIME", requestSort: 'sent_dt', getClassName: 'sent_dt' },
    { id: 2, columnName: "SUBJECT", requestSort: 'email', getClassName: 'email' },
    { id: 3, columnName: "COMMUNICATION TYPE", requestSort: 'type', getClassName: 'type' },
    { id: 4, columnName: "ORDER #", requestSort: 'order_id', getClassName: 'order_id' },
    { id: 5, columnName: "", requestSort: null, getClassName: null },
  ];


export const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const DayString = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];