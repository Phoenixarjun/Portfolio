import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ImCancelCircle } from "react-icons/im";

const CertificateCard = ({ certification }) => {
  const isLink = certification.credentialLink !== "";

  return (
    <div className='flex items-center pl-36 gap-5 w-[90vw]'>
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
            className='underline underline-offset-4 font-medium'
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
              <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
    </div>
  );
};

export default CertificateCard;
