import Link from 'next/link';

import config from '../config.json';
import NavMenu from './navMenu';

export default function LandingHeader() {
  return (
    <header className="bg-primary-light">
      <div className="flex items-start justify-end max-w-6xl p-8 mx-auto">
        <NavMenu />
      </div>
      <div className="grid grid-rows-2 max-w-6xl px-8 pb-8 mx-auto justify-center">
        <h1 className="flex text-5xl font-medium mb-4 justify-center">{config.header.title}</h1>
        <p className="flex text-lg text-center max-w-md justify-center">{config.header.description}</p>
      </div>
    </header>
  );
}
