import BannerLeft from '../../components/banner-left/banner-left'
import Layout from '../../containers/layout/layout'
import FormPersonalInformation from './components/form-personal-information/form-personal-information'
import './personal-information.scss'

const PersonalInformation = () => {
    return (
        <Layout
            right={<FormPersonalInformation />}
            left={<BannerLeft
                    content = {<div></div>}
                />}
        />
    )
}

export default PersonalInformation
