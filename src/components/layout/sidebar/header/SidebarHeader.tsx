import { PAGE } from '@/config/public-page';
import { COLORS } from '@/constants/colors.constants';
import { Menu, SquarePlay } from 'lucide-react';
import Link from 'next/link';

export function SidebarHeader({ toogleSidebar }: { toogleSidebar: () => void }) {
  return (
    <div className='flex items-center gap-6 mb-12'>
      <button
        className='opacity-85 hover:opacity-100 transition-opacity'
        onClick={toogleSidebar}
      >
        <Menu />
      </button>
      <Link
        href={PAGE.HOME}
        className='flex items-center gap-1.5'
      >
        <SquarePlay
          color={COLORS.primary}
          size={29}
        />
        <span className='font-medium text-xl'>YOUTUBE</span>
      </Link>
    </div>
  );
};
