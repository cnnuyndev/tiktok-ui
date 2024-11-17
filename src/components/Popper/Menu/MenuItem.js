import Button from '~/components/Buttons'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function MenuItem({ data, onClick }) {
  const classed = cx('menu-item', { separate: data.separate })
  return (
    <Button
      className={classed}
      lefticon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  )
}
export default MenuItem
