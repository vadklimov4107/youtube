import { SidebarHeader } from './header/SidebarHeader';
import { SidebarMenu } from './menus/SidebarMenu';
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions';
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data';

export function Sidebar( { toogleSidebar }: { toogleSidebar: () => void } ) {
  return (
    <aside className='p-layout border-r border-border
      whitespace-nowrap overflow-hidden'>
      <SidebarHeader toogleSidebar={toogleSidebar} />
      <SidebarMenu menu={SIDEBAR_DATA}/>
      <SidebarSubscriptions />
      <SidebarMenu
        title='More from YouTube'
        menu={MORE_SIDEBAR_DATA}
      />
    </aside>
  )
}
