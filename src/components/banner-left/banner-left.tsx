import './banner-left.scss'

type BannerLeftProps ={
    content: React.ReactNode
}

const BannerLeft = ({content} :BannerLeftProps) => {
    return (
        <div className="bannerleft">
            <div className="bannerleft__content">
                { content }
            </div>
            <div className="bannerleft__image"></div>
           
        </div>
    )
}

export default BannerLeft
