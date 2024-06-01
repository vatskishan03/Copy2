import { Helmet } from "react-helmet";
import { Button, Text } from "../../components";
import React from "react";

export default function ReceivePage() {
  return (
    <>
      <Helmet>
        <title>Receive Copy - Enter Your Token</title>
        <meta 
          name="description"
          content="Receive your copies by entering the provided token. Our secure and straightforward process ensures you get your documents quickly and efficiently"
        />
      </Helmet>

      {/* Token Input Section */}
      <div className="flex w-full justify-center bg-black-900 px-14 py-[258px] md:p-5">
        <div className="flex w-[53%] flex-col items-center gap-20 rounded-[25px] bg-blue_gray-100 p-9 md:w-full md:gap-[60px] sm:gap-10 sm:p-5">
          <div className="mt-[71px] flex rounded-[25px] bg-blue_gray-100 p-12 md:p-5">
            <Text as="p" className="mb-[35px]">
              Enter Token
            </Text>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxkész71" target="_blank" rel="noopener noreferrer">
            <Button shape="square" className="mr-[17px] min-w-[116px] self-end md:mr-0 sm:px-5">
              OK
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
