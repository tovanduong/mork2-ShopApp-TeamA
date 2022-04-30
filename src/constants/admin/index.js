import dashBoardIcon from '../../assets/images/dashboard.svg';
import productIcon from '../../assets/images/database.svg';
import userIcon from '../../assets/images/user.svg';
import ordersIcon from '../../assets/images/shopping-card.svg';
import settingIcon from '../../assets/images/setting.svg';

export const listAdminNavbar = [
  { id: 1, title: 'DashBoard', icon: dashBoardIcon, link: '/admin/' },
  {
    id: 2,
    title: 'Product',
    icon: productIcon,
    link: '/admin/product',
    isOpen: true,

    subItem: [
      { id: 3, title: 'Product List', link: '/admin/product' },
      { id: 4, title: 'Add Product', link: '/admin/product/add' },
    ],
  },
  {
    id: 5,
    title: 'User',
    icon: userIcon,
    link: '/admin/user',
    isOpen: true,
    subItem: [
      { id: 6, title: 'User List', link: '/admin/user' },
      { id: 7, title: 'Add User', link: '/admin/user/add' },
    ],
  },
  { id: 8, title: 'Orders', icon: ordersIcon, link: '/admin/orders' },
  {
    id: 9,
    title: 'Settings',
    icon: settingIcon,
    link: '/admin/settings',
    isOpen: true,
    subItem: [
      { id: 10, title: 'Change Info', link: '/admin/settings' },
      { id: 11, title: 'Logout', link: '/admin/settings' },
    ],
  },
];
