import { useState } from 'react';

const Reason = () => {
  const [selectedReason, setSelectedReason] = useState('');

  const handleReasonClick = (reason) => {
    if (!selectedReason) {
      setSelectedReason(reason);
      // Here you can send the selected reason to the database or perform any other actions
      console.log(reason);
    }
  };

  return (
    <div className="flex cursor-pointer justify-center items-center gap-2 overflow-x-auto scrollbar-thin my-4 scrollbar-thumb-gray-100 scrollbar-track-gray-100">
      <div className={`reason-item ${selectedReason === 'completed' && 'selected'}`} onClick={() => handleReasonClick('completed')}>
        completed
      </div>
      <div className={`reason-item ${selectedReason === 'onhold' && 'selected'}`} onClick={() => handleReasonClick('onhold')}>
        onhold
      </div>
      <div className={`reason-item ${selectedReason === 'Review' && 'selected'}`} onClick={() => handleReasonClick('Review')}>
        Review
      </div>
      <div className={`reason-item ${selectedReason === 'Cancelled' && 'selected'}`} onClick={() => handleReasonClick('Cancelled')}>
        Cancelled
      </div>
      <div className={`reason-item ${selectedReason === 'Postponed' && 'selected'}`} onClick={() => handleReasonClick('Postponed')}>
        Postponed
      </div>
      <div className={`reason-item ${selectedReason === 'ClientFeedback' && 'selected'}`} onClick={() => handleReasonClick('ClientFeedback')}>
        ClientFeedback
      </div>
    </div>
  );
};

export default Reason;