import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Collapse } from 'react-bootstrap';

// helpers

// constants
import { findAllParent, findMenuItem } from '@/common/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const MenuItemWithChildren = ({
  item,
  linkClassName,
  subMenuClassNames,
  activeMenuItems,
  toggleMenu
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);
  const toggleMenuItem = () => {
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };
  return <li className={`side-nav-item ${open ? 'menuitem-active' : ''}`}>
			<Link href="#" className={`side-nav-link ${linkClassName} ${activeMenuItems.includes(item.key) ? 'open' : ''}`} aria-expanded={open} data-menu-key={item.key} onClick={toggleMenuItem}>
				{item.icon && <i className={item.icon} />}
				{!item.badge ? <span className="menu-arrow" /> : <span className={`badge bg-${item.badge.variant} float-end`}>
						{item.badge.text}
					</span>}
				<span> {item.label}</span>
			</Link>
			<Collapse in={open}>
				<div>
					<ul className={`side-nav-second-level ${subMenuClassNames}`}>
						{(item.children || []).map((child, idx) => {
            return <React.Fragment key={idx}>
									{child.children ? <MenuItemWithChildren item={child} linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''} activeMenuItems={activeMenuItems} subMenuClassNames="sub-menu" toggleMenu={toggleMenu} /> : <MenuItem item={child} className={activeMenuItems.includes(child.key) ? 'menuitem-active' : ''} linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''} />}
								</React.Fragment>;
          })}
					</ul>
				</div>
			</Collapse>
		</li>;
};
const MenuItem = ({
  item,
  className,
  linkClassName
}) => {
  // console.log(linkClassName)
  return <li className={`side-nav-item ${className}`}>
			<MenuItemLink item={item} className={linkClassName} />
		</li>;
};
const MenuItemLink = ({
  item,
  className
}) => {
  return <Link href={item.url} target={item.target} className={`side-nav-link-ref ${className}`} data-menu-key={item.key}>
			{item.icon && <i className={item.icon} />}
			{item.badge && <span className={`badge bg-${item.badge.variant} float-end`}>
					{item.badge.text}
				</span>}
			<span> {item.label}</span>
		</Link>;
};

/**
 * Renders the application menu
 */

const AppMenu = ({
  menuItems
}) => {
  const location = usePathname();
  const menuRef = useRef(null);
  const [activeMenuItems, setActiveMenuItems] = useState([]);

  /**
   * toggle the menus
   */
  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([menuItem['key'], ...findAllParent(menuItems, menuItem)]);
    }
  };

  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const div = document.getElementById('main-side-menu');
    let matchingMenuItem = null;
    if (div) {
      const items = div.getElementsByClassName('side-nav-link-ref');
      for (let i = 0; i < items.length; ++i) {
        let trimmedURL = location?.replaceAll(process.env.PUBLIC_URL ?? '', '');
        const url = items[i].pathname;
        if (trimmedURL === process.env.PUBLIC_URL + '/') {
          trimmedURL += 'ecommerce';
        }
        if (trimmedURL === url?.replaceAll(process.env.PUBLIC_URL, '')) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(menuItems, mid);
        if (activeMt) {
          setActiveMenuItems([activeMt['key'], ...findAllParent(menuItems, activeMt)]);
        }
        setTimeout(function () {
          const activatedItem = matchingMenuItem;
          if (activatedItem != null) {
            const simplebarContent = document.querySelector('#leftside-menu-container .simplebar-content-wrapper');
            const offset = activatedItem.offsetTop - 300;
            if (simplebarContent && offset > 100) {
              scrollTo(simplebarContent, offset, 600);
            }
          }
        }, 200);

        // scrollTo (Left Side Bar Active Menu)
        function easeInOutQuad(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
        function scrollTo(element, to, duration) {
          const start = element.scrollTop;
          const change = to - start;
          let currentTime = 0;
          const increment = 20;
          const animateScroll = function () {
            currentTime += increment;
            const val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
              setTimeout(animateScroll, increment);
            }
          };
          animateScroll();
        }
      }
    }
  }, [location, menuItems]);
  useEffect(() => {
    activeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>
			<ul className="side-nav" ref={menuRef} id="main-side-menu">
				{(menuItems || []).map((item, idx) => {
        return <React.Fragment key={idx}>
							{item.isTitle ? <li className="side-nav-title">{item.label}</li> : <>
									{item.children ? <MenuItemWithChildren item={item} toggleMenu={toggleMenu} subMenuClassNames="" activeMenuItems={activeMenuItems} linkClassName="side-nav-link" /> : <MenuItem item={item} linkClassName="side-nav-link" className={activeMenuItems.includes(item.key) ? 'menuitem-active' : ''} />}
								</>}
						</React.Fragment>;
      })}
			</ul>
		</>;
};
export default AppMenu;