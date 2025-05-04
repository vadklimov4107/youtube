'use client';

import { useState, type PropsWithChildren } from 'react';
import cn from 'clsx';

import styles from './Layout.module.scss';

import { Sidebar } from './sidebar/Sidebar';
import { Content } from './content/Content';

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar, setIsShowedSidebar] = useState(true);

  const toogleSidebar = () => {
    setIsShowedSidebar(!isShowedSidebar)
  };

  return  (
    <main className={cn('flex min-h-screen',
      isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
    )}>
      <Sidebar toogleSidebar={toogleSidebar} />
      <Content>{children}</Content>
    </main>
  )
}
