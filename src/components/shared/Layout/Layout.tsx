interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="layout--title">
        <h1 data-testid="title">{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
