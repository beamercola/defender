import React from "react"
import Modal from "react-modal"
import ReactPlayer from "react-player/vimeo"
import { X } from "phosphor-react"

const VideoModal = ({ isOpen, url, close }) => (
  <Modal
    className="modal block bg-black w-full outline-none"
    overlayClassName="outline-none"
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onRequestClose={close}
    closeTimeoutMS={1000}
  >
    <button
      className="absolute top-4 right-4"
      onClick={close}
      aria-label="Close"
    >
      <X className="text-red" size={48} />
    </button>
    <div className="aspect-w-16 aspect-h-9">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url={url}
        playing={true}
      />
    </div>
  </Modal>
)

export default VideoModal
