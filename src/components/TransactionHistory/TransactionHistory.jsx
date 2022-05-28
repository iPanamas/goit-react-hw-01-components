import PropTypes from "prop-types";
import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
  <thead className={s.head}>
    <tr className={s.headRow}>
      <th className={s.headType}>TYPE</th>
      <th className={s.amountType}>AMOUNT</th>
      <th className={s.currencyType}>CURRENCY</th>
    </tr>
  </thead>
      <tbody className={s.body}>
        {items.map(({id, type, amount, currency}) => (
          <tr className={s.bodyRow}key={id}>
              <td className={s.type}>{type}</td>
              <td className={s.amount}>{amount}</td>
              <td className={s.curency}>{currency}</td>
            </tr>
        ))}
      </tbody>
  </table>
  )
}
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}
