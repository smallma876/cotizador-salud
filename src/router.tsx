import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./domains/home/home'))
const PersonalInformation = lazy(() => import('./domains/personal-information/personal-information'))
const HealthPlans = lazy(() => import('./domains/health-plans/health-plans'))

const Router = () => {

    return (
        <BrowserRouter>
    
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/health-plans" component={HealthPlans}/>
                    <Route exact path="/personal-information" component={PersonalInformation}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                   {/*  <Route path="*" component={NotFoundPage}/> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router