import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar/Navbar'

import ResumeTemplate from './components/Pages/ResumeTemplates/ResumeTemplates'
import CvTemplates from './components/Pages/CvTemplates/CvTemplates'
import CoverLetters from './components/Pages/CoverLetters/CoverLetters'
import CareerBlog from './components/Pages/CareerBlog/CareerBlog'
import Pricing from './components/Pages/Pricing/Pricing'
import EnUs from './components/Pages/EnUs/EnUs'
import './App.css';


import AllArticles from './components/Pages/CareerBlog/AllArticles/AllArticles'
import ResumeCv from './components/Pages/CareerBlog/ResumeCv/ResumeCv'
import Examples from './components/Pages/CareerBlog/Examples/Examples'
import InspiringStories from './components/Pages/CareerBlog/InspiringStories/InspiringStories'
import Interviews from './components/Pages/CareerBlog/Interviews/Interviews'
import WritingCoverLetter from './components/Pages/CareerBlog/WritingCoverLetter/WritingCoverLetter'
import PersonalDevelopment from './components/Pages/CareerBlog/PersonalDevelopment/PersonalDevelopment'

import AccountPage from './components/Pages/AccountPage/AccountPage'
import SignOut from './components/Pages/SignOut/SignOut'
import MyDocument from './components/Pages/MyDocument/MyDocument'
import EBookStore from './components/Pages/EBookStore/EBookStore'
import AboutUs from './components/Pages/AboutUs/AboutUs'

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes >

        <Route path= '/' element={<ResumeTemplate />} />
        <Route path= '/cv-templates' element={<CvTemplates />} />
        <Route path= '/cover-letter' element={<CoverLetters />} />
        <Route path= '/career-blog' element={<CareerBlog />} />
        <Route path= '/pricing' element={<Pricing />} />
        <Route path= '/en-us' element={<EnUs />} />
        
        <Route path= '/all-articles' element={<AllArticles />} />
        <Route path= '/resumes-cv' element={<ResumeCv />} />
        <Route path= '/examples' element={<Examples />} />
        <Route path= '/inspiring-stories' element={<InspiringStories />} />
        <Route path= '/interviews' element={<Interviews />} />
        <Route path= '/writing-cover-letter' element={<WritingCoverLetter />} />
        <Route path= '/personal-development' element={<PersonalDevelopment />} />

        <Route path= '/my-document' element={<MyDocument />} />

        <Route path= '/account-setting' element={<AccountPage />} />
        <Route path= '/sign-out' element={<SignOut />} />

        <Route path= '/about-us' element={<AboutUs />} />
        <Route path= '/e-book-store' element={<EBookStore />} />


      </Routes>
    </div>
  );
}

export default App;
