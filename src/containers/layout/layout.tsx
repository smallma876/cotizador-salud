import './layout.scss'

interface ILayoutProps{
    left: React.ReactNode,
    right: React.ReactNode
}

const Layout = ({left , right} : ILayoutProps) => {
    return (
        <div className="layout">
            <section className="layout__left">
                {left}
            </section>
            <section className="layout__right">
                {right}
            </section>
        </div>
    )
}

export default Layout
