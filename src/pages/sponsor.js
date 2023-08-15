import React, { useEffect } from 'react';

const PartnerRedirect = () => {
  useEffect(() => {
    const emailSubject = encodeURIComponent('Sponsorship Inquiries');
    window.location.href = `mailto:oussama@netcomdayz.com?subject=${emailSubject}`;
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src="/assets/logo/black-trans.png" alt="NetComDayz Logo" className="h-16" />
    </div>
  );
};

export default PartnerRedirect;
