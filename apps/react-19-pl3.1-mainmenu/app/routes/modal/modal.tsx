import type { JSX } from '@liebherr/patternlib';
import { PatternlibButton, PatternlibModal } from '@liebherr/patternlib-react';
import { useState } from 'react';

export default function Modal() {
  const [showModal, setShow] = useState(false);
  const handleCancel = () => {
    console.log('Modal: cancel event');
    setShow(false);
  };
  const handleClose = () => {
    console.log('Modal: close event');
    setShow(false);
  };
  const handleConfirm = () => {
    console.log('Modal: confirm event');
    setShow(false);
  };
  const handleButtonClick = () => {
    setShow(true);
  };

  const args: JSX.PatternlibModal = {
    allowCloseOnBackdrop: false,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    cancelIconName: '',
    cancelButtonDisabled: false,
    cancelButtonWidth: 'auto',
    cancelIconPosition: 'right',
    cancelLabel: 'CANCEL',
    confirmButtonDisabled: false,
    confirmButtonWidth: 'auto',
    confirmIconPosition: 'right',
    confirmIconName: 'font-arrow',
    confirmLabel: 'CONFIRM',
    confirmType: 'primary',
    height: 'auto',
    hideCancel: false,
    hideConfirm: false,
    iconName: 'info-circle',
    imgPosition: 'top',
    marginTop: 'auto',
    maxHeight: '100vh',
    modalTitle: 'Modal Title',
    labelSize: '',
    show: false,
    showIcon: false,
    width: '900px',
  };

  return (
    <div>
      <PatternlibButton label="OPEN MODAL" onClick={handleButtonClick}></PatternlibButton>

      <PatternlibModal
        {...args}
        onLhCancel={handleCancel}
        onLhClose={handleClose}
        onLhConfirm={handleConfirm}
        show={showModal}
      >
        <div slot="modal-content">
          Liebherr is renowned for its top technological level and innovative crane concepts. We are the global market
          leader for mobile cranes and set standards in the industry.
        </div>
      </PatternlibModal>
    </div>
  );
}
