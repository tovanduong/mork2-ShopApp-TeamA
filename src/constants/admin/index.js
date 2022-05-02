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

const ratingOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

export const roleOption = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
];

export const listUserCheckBox = [
  {
    id: 'isActive',
    title: 'Status',
    defaultValue: false,
    data: [
      { label: 'Active', value: true },
      { label: 'Disabled', value: false },
    ],
  },
  {
    id: 'isEmailVerified',
    title: 'Verify Email',
    defaultValue: false,
    data: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    id: 'isContactVerified',
    title: 'Verify Contact',
    defaultValue: false,
    data: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
];
