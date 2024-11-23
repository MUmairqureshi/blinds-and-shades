
import React from 'react';
import UserLayout from '../../components/Layout/userlayout';
import CustomBanner from '../../components/CustomBanner';
import Portfolio from '../../components/Portfolio';

const PortfolioMain = () => {
  return (
    <>
      <UserLayout>

       <CustomBanner text="portfolio" className="mb-4"/>

        <Portfolio className="mb-3"/>

      </UserLayout>
    </>
  )
}

export default PortfolioMain