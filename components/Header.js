import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Maloong</span> Nextjs Demo
      </h1>
      <p className={headerStyles.description} >
        Keep up to date with the latest web news on Maloong website.
      </p>
    </div>
  )
}

export default Header
