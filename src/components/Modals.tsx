import React from 'react'
import { Button } from "./Buttons";

// ModalWithHeader Component
interface ModalWithHeaderProps {
    title: string;
    onClose: () => void;
    className?: string;
  }
  
  export const ModalWithHeader: React.FC<ModalWithHeaderProps> = ({ title, onClose }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
  
    const handleButtonClick = () => {
      setModalVisible(true);
    };
  
    const handleModalClose = () => {
      onClose();
      setModalVisible(false);
    };
  
    return (
      <>
        <Button onClick={handleButtonClick}>Open Modal with Header</Button>
        {isModalVisible && (
          <div className="fixed inset-0 z-30 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white pb-12">
                  <div className="flex bg-gray-200 p-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                  </div>
                  {/* Modal content */}
                  <div className='py-12 px-6'>
                    this is the content ...
                    {/* ... rest of the modal content ... */}
                  </div>
                  <div className="m-4 flex justify-end">
                    <Button onClick={handleModalClose}>Close</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
  
    );
  };