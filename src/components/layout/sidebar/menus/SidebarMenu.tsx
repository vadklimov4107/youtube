import type { ISidebarItem } from '../sidebar.types';
import { match } from 'path-to-regexp';

import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';

interface Props {
  title?: string;
  menu: ISidebarItem[];
}

export function SidebarMenu({ menu, title }: Props) {
  const pathname = usePathname();

  return (
    <nav>
      {title && (
        <div className='opacity-40 uppercase font-medium text-xs mb-3'>
          {title}
        </div>
      )}
      <ul>
        {menu.map((item) => (
          <MenuItem
            key={item.label}
            item={item}
            isActive={!!match(item.link)(pathname)}
          />
        ))}
      </ul>
    </nav>
  )
}

