import './App.css';
import {BsDiscord, BsInstagram, BsMedium, BsShopWindow, BsTwitter} from "react-icons/bs";
import {FaQq, FaTiktok} from "react-icons/fa";

function App() {
  return (
      <div className="bgimg"
           style={{
             backgroundImage: `url(/images/hero_bg.png)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             height: '800px',
             padding: '15px',
             textAlign: 'center'
           }}>
        <div className="topleft">
          <img src="/images/logo.png" alt="Collection preview"
               style={{
                 width: '150px',
                 height: '150px'
               }}/>
        </div>
        <div className="middle">
          <h1>OctoPeeps World</h1>
            <br/>
          <h3 style={{
              color: 'rgb(162,253,20)'
          }}>Coming Soon</h3>
          <br/>
          <p>Join us in social networks and stay tuned with latest updates</p>
          <p id="demo"></p>
        </div>

        <div className="text-sm lg:flex-grow pt-10">
          <ul className="flex justify-end align-middle justify-center">
            <li className="mr-5" data-tooltip-target="tooltip-default">
              <a href="https://opensea.io/collection/octopeeps" target="_blank"
                 className="icon hover:text-white">
                <BsShopWindow/>
              </a>
              <div id="tooltip-default" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Opensea
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li className="mr-5" data-tooltip-target="tooltip-default1">
              <a href="https://discord.gg/MfMTwyP6b9" target="_blank"
                 className="icon hover:text-white">
                <BsDiscord/>
              </a>
              <div id="tooltip-default1" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Discord
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li className="mr-5" data-tooltip-target="tooltip-default2">
              <a href="https://www.instagram.com/octo.peeps" target="_blank"
                 className="icon hover:text-white">
                <BsInstagram/>
              </a>
              <div id="tooltip-default2" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Instagram
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li className="mr-5" data-tooltip-target="tooltip-default3">
              <a href="https://twitter.com/octo_peeps" target="_blank"
                 className="icon hover:text-white">
                <BsTwitter/>
              </a>
              <div id="tooltip-default3" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Twitter
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li className="mr-5" data-tooltip-target="tooltip-default4">
              <a href="https://medium.com/@yaroslav-solonnikov" target="_blank"
                 className="icon hover:text-white">
                <BsMedium/>
              </a>
              <div id="tooltip-default4" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Medium
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

            <li className="mr-5" data-tooltip-target="tooltip-default5">
              <a href="https://www.tiktok.com/@yaroslav.solonnikov" target="_blank"
                 className="icon hover:text-white">
                <FaTiktok/>
              </a>
              <div id="tooltip-default5" role="tooltip"
                   className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Tiktok
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>

          </ul>
        </div>


      </div>
  );
}

export default App;
