import './Footer.css';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location=useLocation();
  const isLeaderBoard=location.pathname==='/Lead';
  return (
    <footer className='foot'>
      {!isLeaderBoard&&<div className='Myntra'><div className="myntra-logo"></div><p className="title">Myntra</p></div>}
      {isLeaderBoard&&<div className='Myntra'><div className="myntra-logo-black"></div><p className="title">Myntra</p></div>}
      <div className='Mini'><div className="min-logo"></div><p className="title">Minis</p></div>
      {!isLeaderBoard&&<div className='community'><div className="comm-logo"></div><p className="title">Community</p></div>}
      {isLeaderBoard&&<div className='community'><div className="comm-pink-logo"></div><p className="title">Community</p></div>}
      <div className='Trends'><div className="trend-logo"></div><p className="title">Trends</p></div>
      <div className='Profile'><div className="profile-logo"></div><p className="title">Profile</p></div>
    </footer>
  );
};

export default Footer;
