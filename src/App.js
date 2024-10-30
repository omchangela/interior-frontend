import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { PricingPlan } from './pricingPlan/pricingPlan';
import { ProjectDetails } from './projectDetails/projectDetails';
import { About } from './about/about';
import { NotFound } from './404/404';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';

function App() {

  return (
    <BrowserRouter>
    <SmoothScroll />
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/pricing' element={<PricingPlan/>}></Route>
        <Route path='/project-details' element={<ProjectDetails/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/error' element={<NotFound/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/servicesingle' element={<ServiceSingle/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/cookies-policy' element={<Cookies />}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
