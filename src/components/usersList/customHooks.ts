import usePortal from "react-useportal";

export const useModal = () => {
  const { isOpen, openPortal, togglePortal, closePortal, Portal } = usePortal({
    onOpen({ portal }) {
      portal.current.style.cssText = `
          /* add your css here for the Portal */
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          z-index: 1000;
        `;
    },
  });

  return {
    Modal: Portal,
    openModal: openPortal,
    toggleModal: togglePortal,
    closeModal: closePortal,
    isOpen,
  };
};
