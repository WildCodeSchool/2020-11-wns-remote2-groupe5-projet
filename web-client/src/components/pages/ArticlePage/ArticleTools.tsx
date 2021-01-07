import React from 'react';
import { ReactComponent as IconTools } from '../../../assets/icons/icon_tool.svg';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import { ReactComponent as IconRegister } from '../../../assets/icons/icon_register.svg';
import { ReactComponent as IconShare } from '../../../assets/icons/icon_share.svg';
import { ReactComponent as IconSearch } from '../../../assets/icons/icon_search.svg';
import { ReactComponent as IconWarning } from '../../../assets/icons/icon_warning.svg';
export default function ArticleTools(): JSX.Element {
  return (
    <section className="fixed right-0 h-full flex">
      <ul className="self-center bg-black rounded-l-xl text-white p-2">
        <li className="mr-4 ml-2">
          <IconTools className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconLike className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconRegister className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconShare className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconLike className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconSearch className="w-9 h-9" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconWarning className="w-9 h-9" />
        </li>
      </ul>
    </section>
  );
}
