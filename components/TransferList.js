import TransferItem from './TransferItem';

import classes from './TransferList.module.css';

function TransferList(props) {
  console.log(props.outSourced)
  return (
    <ul className={classes.list}>
      {props.outSourced.map((transfer) => (
        <TransferItem
          description = {transfer}
        />
      ))}
    </ul>
  );
}
export default TransferList;
