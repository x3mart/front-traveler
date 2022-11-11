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
              <Route exact path='/' component={Home} />
              <Route exact path='/puteshestviia' component={Tours} />
              <Route exact path='/regiony-mira' component={Regions} />
              <Route exact path='/napravleniia' component={Destinations} />
              <Route exact path='/napravleniia/populiarnye-napravleniia' component={Popular} />
              <Route exact path='/puteshestviia/nedavno-prosmotrennye-tury' component={Recent} />
              <Route exact path='/puteshestviia/tury-so-skidkami' component={Discount} />
              <Route exact path='/puteshestviia/populiarnye-tury' component={Rated} />
              <Route exact path='/puteshestviia/novinki' component={New} />
              <Route exact path='/puteshestviia/:region/:destination/:slug' component={Tour} />
              <Route exact path='/puteshestviia/:region/:destination' component={Destination} />
              <Route exact path='/puteshestviia/:region' component={Region} />
              <Route exact path='/otzyvy' component={Reviews} />
              <Route exact path='/articles' component={Blog} />
              <Route exact path='/article/:slug' component={SingleBlog} />
              <Route exact path='/tipy-turov' component={Types} />
              <Route exact path='/tipy-turov/:type' component={Type} />
              <Route exact path='/faqs' component={Faq} />
              <Route exact path='/faqs/:category_id/:question_id?' component={SingleFaq} />
              <Route exact path='/eksperty/populiarnye-eksperty' component={PopularExperts} />
              <Route exact path='/eksperty/:id' component={Leader} />
              <Route exact path='/favorite' component={Favorite} />
              <Route path='/login/:redirect?' component={Login} />

              <Route exact path='/reset' component={Reset} />
              <Route exact path='/reset/confirm/:uid/:token' component={ResetConfirm} />

              <Route path='/register' component={Register} />

              <Route path='/legal-documents/:slug' component={PrivacyPolicy} />

              <Route exact path='/account' component={Dashboard} />
              <Route exact path='/account/chat' component={Chat} />
              <Route exact path='/account/support' component={Support} />
              <Route exact path='/account/profile' component={Profile} />
              <Route exact path='/account/orders' component={Orders} />
              <Route exact path='/account/orders/:id/payment' component={Payment} />
              <Route exact path='/account/orders/:id/success' component={Success} />
              <Route exact path='/account/settings' component={Settings} />
              <Route exact path='/account/props' component={Props} />
              <Route exact path='/account/requests' component={Requests} />
              <Route exact path='/account/history' component={History} />
              <Route exact path='/account/team' component={Team} />
              <Route exact path='/account/team/:id/edit' component={TeamEdit} />
              <Route exact path='/account/tours/list' component={MyTours} />

              <Route exact path='/account/tours/:id/edit/main' component={Main} />
              <Route exact path='/account/tours/:id/edit/review' component={Review} />
              <Route exact path='/account/tours/:id/edit/prices' component={Prices} />
              <Route exact path='/account/tours/:id/edit/gallery' component={Gallery} />
              <Route exact path='/account/tours/:id/edit/route' component={TourRoute} />
              <Route exact path='/account/tours/:id/edit/accommodation' component={Accommodation} />
              <Route exact path='/account/tours/:id/edit/details' component={Details} />
              <Route exact path='/account/tours/:id/edit/important' component={Important} />

              <Route exact path='/account/tours/:id/edit/preview' component={TourPage} />

              <Route exact path='/moderation/:id' component={TourModerationPage} />
              <Route exact path='/activate/:uid/:token' component={EmailActivate} />
              <Route path='*' component={Page404} />
            </Switch>
          </YMaps>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
