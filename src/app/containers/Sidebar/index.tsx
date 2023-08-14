import React from "react";
import styles from './sidebar.module.scss';



const Sidebar = () => {

  const sidebar_data = [{
    "menu_title":"Menu",
    "menu_content": ["Dashboard"]
  },
  {
    "menu_title":"Apps",
    "menu_content": ["Projects","Contacts"]
  }
  ];

  return (
    <div className={styles.sidebar}>
    <ul>
      {sidebar_data.map(menu =>(
        <>
        <li key={menu.menu_title} className={styles.menu_title}>
          {menu.menu_title}
        </li>
         {
          menu.menu_content.map(mc => (
            <li key={mc} className={styles.menu_content}><a href="/">{mc}</a></li>
          ))
         }
        </>
        ))}
    </ul>
  </div>
  );
};
export default Sidebar;
