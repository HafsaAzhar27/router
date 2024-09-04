import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/download (23).jpeg"
          alt="about home"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            My home is surrounded by a comforting environment that adds to its charm.
           The streets are lined with beautiful trees and flowers, creating a serene and inviting atmosphere. There is a nearby park with well-maintained paths where I can take leisurely strolls or simply enjoy the fresh air. 
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Hafsa Azhar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Student, ryk
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;