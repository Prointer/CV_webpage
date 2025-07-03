import React from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Close button (позиционируется относительно this container) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black dark:hover:text-white text-xl"
          aria-label="Close modal"
        >
          ×
        </button>

        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  )
}

export default Modal
