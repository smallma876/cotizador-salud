import React from 'react'
import BannerLeft from '../../components/banner-left/banner-left'
import Layout from '../../containers/layout/layout'
import FormHealthPlants from './components/form-health-plants'

const HealthPlans = () => {
    return (
        <Layout
            right={<FormHealthPlants />}
            left={<BannerLeft
                    content = {<div></div>}
                />}
        />
    )
}

export default HealthPlans
