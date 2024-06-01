import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import React from "react";

export default function CreatePage() {
  return (
    <Helmet>
      <title>Create Copy - Online and Offline Solutions</title>
      <meta
        name="description"
        content="Initiate copy creation online or offline. Our platform ensures a seamless process for generating copies with a simple 'Done' confirmation."
      />

      {/* create main section */}
      <div className="flex w-full flex-col items-start gap-[184px] bg-black-980 px-[11px] pb-[11px] md:gap-[138px] sm:gap-[92px]">
        {/* status toggle section */}
        <div className="flex w-[95%] flex-col items-center md:w-full">
          {/* status information section */}
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            {/* offline status section */}
            <div className="flex w-[19%] flex-col items-end sm:w-full">
              <Text size="md" as="p" className="relative z-[5] self-start !text-white-A700">
                offline
              </Text>

              {/* status images section */}
              <div className="relative mr-12 mt-[-4px] flex w-[70%] flex-col items-end pb-[55px] md:mr- md:w-full md:pb-5">
                <div className="relative h-[58px] self-stretch rounded-[72px] bg-blue_gray-100 md:h-auto">
                  <div className="mr-5 flex flex-col items-start md:mr-0"></div>
                  <div className="flex_h-[9px] flex-col items-start justify-center bg-[url(/public/images/img_group_14.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                    <img src="images/img_vector_3.svg" alt="vector three image" className="h-[5px]" />
                  </div>
                  <img src="images/ing_vector_1.svg" alt="vector one image" className="h-[23px] self-end" />
                </div>

                {/*status icons section */}
                <div className="absolute bottom-0 right-[1.70px] top-0 my-auto flex h-[54px] w-[32%] flex-col items-start justify-center bg-[url(/public/images/img_group_13.svg)] bg-cover bg-no-repeat md:h-auto">
                  {/* additional status icons section */}
                  <div className="flex_w-[61%] flex-col items-end md:w-full md:p-5">
                    <div className="relative z-[2] flex flex-col items-start self-stretch">
                      <Img
                        src="images/img_vector_9.svg"
                        alt="vector nine image"
                        className="relative z-[3] h-[28px] w-full md:h-auto"
                      />
                      <Img
                        src="images/img_thumbs_up.svg"
                        alt="thumbs up image"
                        className="relative mt-[-16px] h-[30px]"
                      />
                    </div>

                    {/* status emblem row section */}
                    <div className="relative mr-2 mt-[-10px] flex items-start pr-px md:mr-0">
                      <Img
                        src="images/img_vector_7.svg"
                        alt="vector seven image"
                        className="relative z-[1] h-[2px] w-full"
                      />
                      <Img
                        src="images/img_vector_6.svg"
                        alt="vector six image"
                        className="relative ml-[-4px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_vector_4.svg"
                  alt="vector four image"
                  className="relative z-[4] mr-[45px] mt-[-56px] h-px w-px md:mr-0"
                />
              </div>

              <Text size="md" as="p" className="mt-2 !text-white-A700">
                Online
              </Text>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk@sz71" target="_blank">
              <Button size="lg" className="mb-[9px] min-w-[181px] self-end rounded-[49px] sm:px-5">
                Done
              </Button>
            </a>
          </div>
          <div className="mx-auto mt-60 h-px w-full max-w-[960px] rotate-[1deg] bg-white-A700 md:p-5" />
          <Text size="md" as="p" className="mt-[79px] !text-white-A700">
            Text
          </Text>
          <div className="mx-auto mt-[104px] h-px w-full max-w-[1037px] bg-white-A700 md:p-5" />
        </div>
        
        {/* footer line section */}
        <div className="flex_w-[95%] flex-col items-end justify-end md:w-full">
          <div className="mb-[119px] md-[156px] mt-[184px] h-px w-[83%] bg-white-A700 md: mr-0" />
        </div>
      </div>
    </Helmet>
  );
}
