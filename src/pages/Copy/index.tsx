import { Helmet } from "react-helmet";
import { Text } from "../../components";

export default function CopyPage() {
  return (
    <>
      <Helmet>
        <title>Text Copy - Easy Content Duplication</title>
        <meta
          name="description"
          content="Effortlessly duplicate text with our Text Copy feature. Quick, simple, and user-friendly text copying tool."
        />
      </Helmet>
      {/* main content section */}
      <div className="flex w-full flex-col items-center gap-5 bg-black-900 p-14 md:p-5">
        <div className="container-xs flex flex-col items-end justify-end">
          <Text as="p" className="mt-[102px] !text-white-A700">
            Copy
          </Text>
        </div>
        <div className="container-xs flex flex-col items-center gap-[370px] md:gap-[277px] sm:gap-[185px]">
          <div className="mt-5 h-px w-[96%] bg-white-A700" />
          <div className="mb-14 flex w-[94%] flex-col items-start md:w-full">
            <div className="h-px w-full self-stretch bg-white-A700" />
            <Text size="md" as="p" className="m-[426px] mt-[61px] !text-white-A700 md:ml-0">
              Text
            </Text>
            <div className="ml-2.5 mt-[118px] h-px self-stretch bg-white-A700 md:ml-0" />
          </div>
        </div>
      </div>
    </>
  );
}