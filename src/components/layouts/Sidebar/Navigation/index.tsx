import { List, ListItem } from '@chakra-ui/react';
import {
  MdCalendarToday,
  MdMailOutline,
  MdOutlineChatBubbleOutline,
  MdOutlineFlag,
  MdOutlineNotificationsActive,
  MdOutlineSettingsInputComposite,
  MdOutlineShoppingBag,
  MdOutlineSpaceDashboard,
  MdOutlineSupervisorAccount,
} from 'react-icons/md';

import { NavItem } from './NavItem';
const items = [
  {
    type: 'link',
    label: 'Dashboard',
    icon: MdOutlineSpaceDashboard,
    path: '/',
  },
  {
    type: 'link',
    label: 'Products',
    icon: MdOutlineShoppingBag,
    path: '/',
  },
  {
    type: 'link',
    label: 'Mail',
    icon: MdMailOutline,
    path: '/',
  },
  {
    type: 'link',
    label: 'Campaings',
    icon: MdOutlineFlag,
    path: '/',
  },
  {
    type: 'link',
    label: 'Calendar',
    icon: MdCalendarToday,
    path: '/',
  },
  {
    type: 'link',
    label: 'Contacts',
    icon: MdOutlineSupervisorAccount,
    path: '/',
  },

  {
    type: 'header',
    label: 'Account',
  },

  {
    type: 'link',
    label: 'Notifications',
    icon: MdOutlineNotificationsActive,
    path: '/',
    notifications: 24,
  },
  {
    type: 'link',
    label: 'Chat',
    icon: MdOutlineChatBubbleOutline,
    path: '/',
    messages: 8,
  },
  {
    type: 'link',
    label: 'Settings',
    icon: MdOutlineSettingsInputComposite,
    path: '/',
  },
];

export const Navigation = ({ collapse }: { collapse: any }) => (
  <List w="full" my={8}>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
);
