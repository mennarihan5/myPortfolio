import styles from './styles.module.scss';

const ConnectBtn = (props) => {
  const {children, className} = props;

  return (
    <button className={`${styles['connect-btn']} ${className}`}>
        {children}
    </button>
  )
}

export default ConnectBtn;