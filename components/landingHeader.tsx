import Link from 'next/link';

import config from '../config.json';
import NavMenu from './navMenu';

export default function LandingHeader() {
  return (
    <header className="h-screen">
      <div>
        <video autoPlay muted loop className= "video h-screen">
          <source src="/static/videos/backgroundvideo.mp4" type="video/mp4"/>
        </video>
        <div className="flex items-start justify-end max-w-6xl p-8 mx-auto">
          <NavMenu />
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
          <div className="grid auto-rows-min max-w-6xl px-8 h-screen mx-auto justify-center content-center">
            <h1 className="flex text-5xl font-medium mb-4 justify-center">AutoWheelie</h1>
            <p className="flex text-lg text-center max-w-md justify-center pb-10">Making all cities accessible to wheelchair users</p>
          </div>
        </div>
      </div>
    </header>
  );
}
