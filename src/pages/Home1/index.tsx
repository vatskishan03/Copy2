import { Helmet } from "react-helmet";
import React from "react";
import { Button, Text } from "../../components";

export default function Home1Page() {
  return (
    <div className="bg-black-900-01 p-4 sm:p-6 md:p-8"> {/* Adjusted padding for better responsiveness */}
      <Helmet>
        <title>Home - Create, Receive, and Scan Copies</title>
        <meta 
          name="description"
          content="Explore the home page to create, receive, and scan copies with ease. Get started with our user-friendly tools for efficient copy management."
        />
      </Helmet>

      {/* Line Display Section */}
      <div className="flex w-full md:w-auto flex-col items-end mb-8"> {/* Added margin-bottom */}
        <div className="flex w-1/4 md:w-full flex-col gap-4 rounded-2xl bg-blue-gray-100 p-3"> 
          <div className="mt-1.5 h-px bg-black-900-03" />
          <div className="h-px rotate-[1deg] bg-black-900-03" />
        </div>
      </div>

      {/* Copy Interaction Section */}
      <div className="flex w-full md:w-auto flex-col items-center justify-end">
        <div className="flex flex-col items-center md:w-full gap-8"> {/* Adjusted gap for better spacing */}
          <div className="flex justify-center self-stretch rounded-2xl bg-blue-gray-100 px-14 py-[93px] md:px-8 md:py-12"> {/* Adjusted padding for better responsiveness */}
            <Text size="md" as="p">
              Create Copy
            </Text>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk@sz71" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center self-stretch rounded-2xl bg-blue-gray-100 px-14 py-[85px] md:px-8 md:py-12"> {/* Adjusted padding for better responsiveness */}
              <Text size="md" as="p">
                Receive Copy
              </Text>
            </div>
          </a>
          <Button size="md" shape="round" className="min-w-[169px] sm:px-5">
            Scan
          </Button>
        </div>
      </div>
    </div>
  );
}
