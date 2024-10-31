import React from 'react'

const Section = ({ bgImage, children, extraClasses = '' }) => {
    return (
      <section 
        className={`pt-7 pb-28 relative bg-cover bg-bottom -z-10 bg-no-repeat text-white ${extraClasses}`} 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {children}
      </section>
    );
  };

export default Section
