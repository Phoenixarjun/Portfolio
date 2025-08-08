import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ImCancelCircle } from "react-icons/im";
import { motion } from 'framer-motion';

const CertificateCard = ({ certification }) => {
  return (
    <>
      <CertificateCardDesktop certification={certification} />
      <CertificateCardMobile certification={certification} />
    </>
  );
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const CertificateCardDesktop = ({ certification }) => {
  const isLink = certification.credentialLink !== "";

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className='hidden items-center pl-36 gap-5 w-[90vw] md:flex'
    >
      <div>
        <img src={certification.logo} alt={certification.platforms[0]} width={80} />
      </div>

      <div className='flex flex-col items-start justify-center w-full'>
        <div className='flex items-center justify-between w-full'>
          <h2 className='text-xl font-semibold'>{certification.name}</h2>
          <p className='text-lg'>{certification.completionYear}</p>
        </div>

        <p className='text-md'>{certification.description}</p>

        {isLink ? (
          <a
            href={certification.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className='underline underline-offset-4 font-medium '
          >
            See Credential
          </a>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className='underline underline-offset-4 font-medium'>
                See Credential
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
              <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-lg focus:outline-none">
                <img
                  src={certification.certificateImg || "./certifications/default.png"}
                  alt={certification.name + " Certificate"}
                />
                <Dialog.Close asChild>
                  <button
                    className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
                    aria-label="Close"
                  >
                    <ImCancelCircle className="text-[20px]" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </div>
    </motion.div>
  );
};

const CertificateCardMobile = ({ certification }) => {
  const isLink = certification.credentialLink !== "";

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-[90vw] max-w-[900px] mx-auto items-center flex flex-col md:flex-row md:items-center gap-5 md:pl-36 md:hidden"
    >
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img src={certification.logo} alt={certification.platforms[0]} width={80} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center w-full">
          <h2 className="text-xl font-semibold text-center">{certification.name}</h2>
          <p className="text-lg mt-1 md:mt-0">{certification.completionYear}</p>
        </div>

        <p className="text-md mt-3 text-center">{certification.description}</p>

        {isLink ? (
          <a
            href={certification.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-center underline-offset-4 font-medium mt-4 md:mt-6"
          >
            See Credential
          </a>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="underline underline-offset-4 font-medium mt-4 md:mt-6">
                See Credential
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
              <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-lg focus:outline-none">
                <img
                  src={certification.certificateImg || "./certifications/default.png"}
                  alt={certification.name + " Certificate"}
                />
                <Dialog.Close asChild>
                  <button
                    className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
                    aria-label="Close"
                  >
                    <ImCancelCircle className="text-[20px]" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
