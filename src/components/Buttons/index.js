import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  primary = false,
  outline = false,
  disabled = false,
  small = false,
  large = false,
  rounded = false,
  text = false,
  children,
  className,
  lefticon,
  righticon,
  onClick,
  ...passprops
}) {
  let Comp = 'button'
  const props = {
    onClick,
    passprops,
  }
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    disabled,
    text,
    small,
    large,
    rounded,
  })

  if (disabled) {
    delete props.onClick
  }

  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      <span className={cx('title')}>{children}</span>
      {righticon && <span className={cx('icon')}>{righticon}</span>}
    </Comp>
  )
}

export default Button
