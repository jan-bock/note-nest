import {
  Box,
  Card,
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

export const AcknowledgementsModal: FC<{
  showAcknowledgementsModal: boolean;
  setShowAcknowledgementsModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showAcknowledgementsModal, setShowAcknowledgementsModal }) => {
  return (
    <>
      <Modal
        isOpen={showAcknowledgementsModal}
        onClose={() => setShowAcknowledgementsModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"18px"}>Acknowledgements</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody fontSize={"14px"}>
            <p>
              The core idea behind and the loose design of <b>NoteNest</b> is
              based on{" "}
              <a href="https://github.com/abiddiscombe" target="_blank">
                <u>Archie Biddiscombe</u>
              </a>
              's own personal project{" "}
              <a href="https://app.notedeck.dev/" target="_blank">
                <u>NoteDesk</u>
              </a>
              .
              <br /> <br />I took on the challenge of recreating this in a short
              amount of time, with minimal-to-no viewing of his implementation.
              I took this opportunity to learn Vite, PNPM and Chakra, which
              aren't tools I get to use on a day-to-day basis!
              <br /> <br />
              <b>Archie, thank you for the inspiration &#128523;</b>
              <br />
              <br />
              <Card
                outline={"1px"}
                cursor={"pointer"}
                onClick={() => alert("www.github.com")}
              >
                <Box padding={"20px"}>
                  <Heading
                    size="xs"
                    textTransform="uppercase"
                    marginBottom={"10px"}
                  >
                    To GitHub!
                  </Heading>
                  If you wish to <b>see NoteNest source code</b> for this mini
                  project under the MIT License. Please click this card!
                </Box>
              </Card>
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
