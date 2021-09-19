import BannerInformation from "../../components/banner-information/banner-information"
import BannerLeft from "../../components/banner-left/banner-left"
import Layout from "../../containers/layout/layout"
import HomeInformation from "./components/home-information/home-information"


const Home = () => {
    return (
        <Layout
            right={<HomeInformation />}
            left={<BannerLeft
                    content = {<BannerInformation />}
                />}
        />
    )
}

export default Home
