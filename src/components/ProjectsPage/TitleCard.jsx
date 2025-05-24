import * as Dialog from '@radix-ui/react-dialog';

const TitleCard = ({ title, description, image, link }) => {
  const isLinkAvailable = link && link.trim() !== "";

  return (
    <div className="relative min-h-96 flex flex-col justify-center items-start gap-3 p-8 text-white">
      <img
        src={image}
        alt="Card Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-10 bg-black/40 p-5 rounded-lg backdrop-blur-sm gap-5 flex flex-col items-start max-w-2xl">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-300">{description}</p>

        {isLinkAvailable ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          >
            Dive into the Project
          </a>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="mt-3 px-4 py-2 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                Dive into the Project
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed z-20 top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl">
                <img
                  src={image}
                  alt="Project Preview"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Project In Development</h2>
                <p className="text-gray-700 mb-1">
                  This project is still under development or not yet deployed.
                </p>
                <p className="text-gray-700 mb-4">
                  Kindly visit the GitHub repository to run the project locally.
                </p>
                <Dialog.Close asChild>
                  <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Close
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

export default TitleCard;
