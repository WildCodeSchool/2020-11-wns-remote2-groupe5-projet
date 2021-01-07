import React from 'react';
import { ReactComponent as IconHome } from '../../../assets/icons/icon_home.svg';
import { ReactComponent as IconEdit } from '../../../assets/icons/icon_edit.svg';
import { ReactComponent as IconNotif } from '../../../assets/icons/icon_notif.svg';
import { ReactComponent as IconRegister } from '../../../assets/icons/icon_register.svg';
import { ReactComponent as IconApercu } from '../../../assets/icons/icon_apercu.svg';
import { Link } from 'react-router-dom';
import './MainPanel.css';

export default function MainPanel(): JSX.Element {
  return (
    <div className="bg-black flex flex-col items-center">
      <Link to="/">
        <IconHome className="w-14 h-14 m-2" />
      </Link>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <Link to="/articles/article-creation">
        <IconEdit className="w-14 h-14 m-2" />
      </Link>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <IconNotif className="w-14 h-14 m-2" />
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <IconRegister className="w-14 h-14 m-2" />
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <IconApercu className="w-14 h-14 m-2" />
    </div>
  );
}
