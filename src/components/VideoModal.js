import React from "react"
import Modal from "react-modal"
import ReactPlayer from "react-player/vimeo"

const VideoModal = ({ isOpen, url, close }) => (
  <Modal
    className="modal block bg-black w-full"
    overlayClassName=""
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onRequestClose={close}
    closeTimeoutMS={1000}
  >
    <div className="aspect-w-16 aspect-h-9">
      <ReactPlayer controls={true} width="100%" height="100%" url={url} />
    </div>
  </Modal>
)

export default VideoModal
