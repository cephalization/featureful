import { useState } from 'react'
import PropTypes from 'prop-types'
import Transition from 'src/components/Transition'

const Modal = ({ open, children }) => {
  const [modalVisible, setModalVisible] = useState(open)

  return (
    <div
      className={`${
        modalVisible ? 'fixed' : 'hidden'
      } bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center`}
    >
      <Transition
        show={open}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onEnter={() => setModalVisible(true)}
        onExited={() => setModalVisible(false)}
        unmountOnExit
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
      </Transition>

      <Transition
        show={open}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        onEnter={() => setModalVisible(true)}
        onExited={() => setModalVisible(false)}
        unmountOnExit
      >
        <div
          className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </Transition>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
}

export default Modal
