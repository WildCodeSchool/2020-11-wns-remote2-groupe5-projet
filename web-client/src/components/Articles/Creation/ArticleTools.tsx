import React from 'react';
import { ReactComponent as IconTools } from '../../../assets/icons/icon_tool.svg';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import { ReactComponent as IconRegister } from '../../../assets/icons/icon_register.svg';
import { ReactComponent as IconShare } from '../../../assets/icons/icon_share.svg';
import { ReactComponent as IconSearch } from '../../../assets/icons/icon_search.svg';
import { ReactComponent as IconWarning } from '../../../assets/icons/icon_warning.svg';


//import { FiPlusCircle } from "react-icons/fi";


export default function ArticleTools(): JSX.Element {
  return (
    <section>
      <ul>
        <li>
          <IconTools  />
        </li>
        <li >
          <IconLike  />
        </li>
        <li>
          <IconRegister  />
        </li>
        <li>
          <IconShare  />
        </li>
        <li>
          <IconLike  />
        </li>
        <li>
          <IconSearch  />
        </li>
        <li>
          <IconWarning  />
        </li>
      </ul>
    </section>
  );
}
