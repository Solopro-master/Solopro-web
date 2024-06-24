import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Appoinments from '../components/tables/appoinments';
import MentorProfileE from '../components/tables/mentorProfileE';
import Blogs from '../components/blog/blog-cards';
import BlogDetail from '../components/blog/BlogDetails';
import MiLandingPage from '../components/miandingpage';

const MiRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<MiLandingPage/>}/>
      <Route path="/appoinments" element={<Appoinments />} />
      <Route path="/miprofile/:_id" element={<MentorProfileE />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:type/:id" element={<BlogDetail />} />
    </Routes>
  )
}

export default MiRoute;