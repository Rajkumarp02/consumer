import Link from 'next/link';
import React from 'react';

const navItems = [
  { label: 'Vision & Mission', content: 'Our vision and mission details.' },
  { label: 'About Us', content: 'Information about State President, President, Executive Committee, and members.' },
  { label: 'Consumer Act History', content: 'History of the Consumer Act.' },
  { label: 'Recent case Success Results', content: 'Images and details of recent success cases.' },
  { label: 'Awareness Video', content: 'Details about our awareness videos.' },
  { label: 'Membership Application', content: 'How to apply for membership and subscription details.' },
  { label: 'Gallery', content: 'Photos and videos from our events.' },
  { label: 'Notifications', content: 'Information about past and current events.' },
];

const SubNav = () => {
  return (
    <nav className="bg-white box-shadow shadow-2xl py-2 mt-16 fixed  flex justify-center items-center top-0 left-0 right-0 z-50">
      <ul className="flex flex-row justify-center items-center w-full py-3 text-gray-900 font-medium text-sm md:text-base lg:text-sm">
        {navItems.map((item, index) => (
          <li key={index} className="relative group flex justify-center items-center mt-6">
            <Link href="#" className="px-4 py-2 rounded">
              {item.label}
            </Link>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 shadow-lg opacity-0 z-50 group-hover:opacity-100 transition-opacity">
              <div className="p-4">{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
