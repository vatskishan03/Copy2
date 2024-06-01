import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import React from "react";

export default function QRPage() {
  return (
    <>
      <Helmet>
        <title>QR Code Generator - Create & Save QR Codes</title>
        <meta 
          name="description"
          content="Generate QR codes instantly with our QR Code Generator. Save and share URLs with ease using our secure QR technology."
        />
      </Helmet>

      {/* QR Code Section */}
      <div className="flex w-full justify-center bg-black-900 px-14 py-[102px] md:p-5">
        {/* URL Display Section */}
        <div className="mx-auto mb-[65px] flex w-full max-w-[1104px] justify-center rounded-[25px] bg-blue_gray-100 p-[17px] md:p-5">
          {/* Token Interaction Section */}
          <div className="mt-[13px] flex w-[91%] flex-col items-start gap-[27px] md:w-full">
            {/* Token Info Row Section */}
            <div className="flex items-center justify-between gap-5 self-stretch">
              <Text as="p" className="mb-7 self-end">
                Token:
              </Text>

              {/* Close Button Column Section */}
              <div className="flex flex-col items-center">
                <a href="https://www.youtube.com/embed/bvFxk@sz71" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" shape="square" className="relative z-[1] min-w-[79px] sm:px-5">
                    X
                  </Button>
                </a>
                <Text as="p">Close</Text>
              </div>
            </div>
            <Text as="p">URL:</Text>
            <Img
              src="images/img_qrcode.svg"
              alt="qr_code"
              className="ml-[251px] h-[351px] w-[52%] md:ml-0"
            />
            <Button size="xs" shape="square" className="ml-[317px] min-w-[243px] md:ml-0 sm:px-5">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
