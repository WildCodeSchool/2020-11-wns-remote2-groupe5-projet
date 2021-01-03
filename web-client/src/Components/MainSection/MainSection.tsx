import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FeedPage from './FeedPage/FeedPage';
import './MainSection.css';

export default function MainSection() {
  return (
    <div>
      <Header />
      <FeedPage />
      <Footer />
    </div>
  );
}
