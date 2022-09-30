import React, {useEffect, Suspense, lazy, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, useHistory, Redirect
} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import { YMaps } from 'react-yandex-maps';

import './index.css'

const Home = lazy(() => import("./pages/HomeHandler"));
const Regions = lazy(() => import("./pages/Regions"));
const Region = lazy(() => import("./pages/Region"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Popular = lazy(() => import("./pages/Popular"));
const Destination = lazy(() => import("./pages/Destination"));
const Discount = lazy(() => import("./pages/Discount"));
const New = lazy(() => import("./pages/New"));
const Recent = lazy(() => import("./pages/Recent"));
const Rated = lazy(() => import("./pages/Rated"));
const Types = lazy(() => import("./pages/Types"));
const Type = lazy(() => import("./pages/Type"));
const SingleFaq = lazy(() => import("./pages/SingleFaq"));
const Faq = lazy(() => import("./pages/Faq"));
// const Home = lazy(() => import("./pages/Home"));

// import Home from './pages/Home'
const Login = lazy(() => import('./pages/Login'))
const Reset = lazy(() => import('./pages/PasswordReset'))
const ResetConfirm = lazy(() => import('./pages/PasswordResetConfirm'))
const Leader = lazy(() => import('./pages/Leader'))
const PopularExperts = lazy(() => import('./pages/PopularExperts'))
const Register = lazy(() => import('./pages/Register'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Dashboard = lazy(() => import('./pages/account/Dashboard'))
const History = lazy(() => import('./pages/account/History'))
const Tours = lazy(() => import('./pages/ToursPage'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Blog = lazy(() => import('./pages/Blog'))
const SingleBlog = lazy(() => import('./pages/Blog/SingleBlog'))
const Tour = lazy(() => import('./pages/Tour'))
const TourModerationPage = lazy(() => import('./pages/TourModerationPage'))
const MyTours = lazy(() => import('./pages/account/Tours/MyTours'))
const Chat = lazy(() => import('./pages/account/Chat'))
const Support = lazy(() => import('./pages/account/Support'))
const Profile = lazy(() => import('./pages/account/Profile/Profile'))
const Orders = lazy(() => import('./pages/account/Orders'))
const Payment = lazy(() => import('./pages/account/Orders/OrderPayment'))
const Success = lazy(() => import('./pages/account/Orders/OrderSuccess'))
const Settings = lazy(() => import('./pages/account/Settings/Settings'))
const Props = lazy(() => import('./pages/account/Props/Props'))
const Requests = lazy(() => import('./pages/account/Requests/Requests'))
const Team = lazy(() => import('./pages/account/Team'))
const TeamEdit = lazy(() => import('./pages/account/Team/TeamEdit'))
const TourPage = lazy(() => import('./pages/TourPage/TourPage'))

const Main = lazy(() => import('./components/AccountTours/Components/Main'))
const Review = lazy(() => import('./components/AccountTours/Components/Review'))
const Prices = lazy(() => import('./components/AccountTours/Components/Prices'))
const Gallery = lazy(() => import('./components/AccountTours/Components/Gallery'))
const TourRoute = lazy(() => import('./components/AccountTours/Components/Route'))
const Accommodation = lazy(() => import('./components/AccountTours/Components/Accommodation'))

const Details = lazy(() => import('./components/AccountTours/Components/Details'))
const Important = lazy(() => import('./components/AccountTours/Components/Important'))
const EmailActivate = lazy(() => import('./pages/account/EmailActivate/EmailActivate'))

import Page404 from './pages/404'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Favorite from "./pages/Favorite";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={
          <Box sx={{display: 'flex', width: '100%', height: '500px', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress/>
          </Box>
        }>
          <YMaps query={{ apikey: '7276fdc3-5ca1-4286-bdd3-76d17cce9e38' }}>
            <Switch>
              {/*<Route exact path='/' component={RouterPages} />*/}
              <Route exact path='/:language' component={Home} />
              <Route exact path='/:language/puteshestviia' component={Tours} />
              <Route exact path='/:language/regiony-mira' component={Regions} />
              <Route exact path='/:language/napravleniia' component={Destinations} />
              <Route exact path='/:language/napravleniia/populiarnye-napravleniia' component={Popular} />
              <Route exact path='/:language/puteshestviia/nedavno-prosmotrennye-tury' component={Recent} />
              <Route exact path='/:language/puteshestviia/tury-so-skidkami' component={Discount} />
              <Route exact path='/:language/puteshestviia/populiarnye-tury' component={Rated} />
              <Route exact path='/:language/puteshestviia/novinki' component={New} />
              <Route exact path='/:language/puteshestviia/:region/:destination/:slug' component={Tour} />
              <Route exact path='/:language/puteshestviia/:region/:destination' component={Destination} />
              <Route exact path='/:language/puteshestviia/:region' component={Region} />
              <Route exact path='/:language/otzyvy' component={Reviews} />
              <Route exact path='/:language/articles' component={Blog} />
              <Route exact path='/:language/article/:slug' component={SingleBlog} />
              <Route exact path='/:language/tipy-turov' component={Types} />
              <Route exact path='/:language/tipy-turov/:type' component={Type} />
              <Route exact path='/:language/faqs' component={Faq} />
              <Route exact path='/:language/faqs/:category_id/:question_id?' component={SingleFaq} />
              <Route exact path='/:language/eksperty/populiarnye-eksperty' component={PopularExperts} />
              <Route exact path='/:language/eksperty/:id' component={Leader} />
              <Route exact path='/:language/favorite' component={Favorite} />
              <Route path='/:language/login/:redirect?' component={Login} />

              <Route exact path='/:language/reset' component={Reset} />
              <Route exact path='/:language/reset/confirm/:uid/:token' component={ResetConfirm} />

              <Route path='/:language/register' component={Register} />

              <Route path='/:language/legal-documents/:slug' component={PrivacyPolicy} />

              <Route exact path='/:language/account' component={Dashboard} />
              <Route exact path='/:language/account/chat' component={Chat} />
              <Route exact path='/:language/account/support' component={Support} />
              <Route exact path='/:language/account/profile' component={Profile} />
              <Route exact path='/:language/account/orders' component={Orders} />
              <Route exact path='/:language/account/orders/:id/payment' component={Payment} />
              <Route exact path='/:language/account/orders/:id/success' component={Success} />
              <Route exact path='/:language/account/settings' component={Settings} />
              <Route exact path='/:language/account/props' component={Props} />
              <Route exact path='/:language/account/requests' component={Requests} />
              <Route exact path='/:language/account/history' component={History} />
              <Route exact path='/:language/account/team' component={Team} />
              <Route exact path='/:language/account/team/:id/edit' component={TeamEdit} />
              <Route exact path='/:language/account/tours/list' component={MyTours} />

              <Route exact path='/:language/account/tours/:id/edit/main' component={Main} />
              <Route exact path='/:language/account/tours/:id/edit/review' component={Review} />
              <Route exact path='/:language/account/tours/:id/edit/prices' component={Prices} />
              <Route exact path='/:language/account/tours/:id/edit/gallery' component={Gallery} />
              <Route exact path='/:language/account/tours/:id/edit/route' component={TourRoute} />
              <Route exact path='/:language/account/tours/:id/edit/accommodation' component={Accommodation} />
              <Route exact path='/:language/account/tours/:id/edit/details' component={Details} />
              <Route exact path='/:language/account/tours/:id/edit/important' component={Important} />

              <Route exact path='/:language/account/tours/:id/edit/preview' component={TourPage} />

              <Route exact path='/:language/moderation/:id' component={TourModerationPage} />
              <Route exact path='/:language/activate/:uid/:token' component={EmailActivate} />
              <Route path='*' component={Page404} />
            </Switch>
          </YMaps>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
