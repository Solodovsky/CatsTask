import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <NavLink
          className={({ isActive }) =>
            classNames(styles.headerLink, {
              [styles.headerLinkActive]: isActive,
            })
          }
          to="/"
          end
        >
          Все котики
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            classNames(styles.headerLink, {
              [styles.headerLinkActive]: isActive,
            })
          }
          to="/favorites"
        >
          Любимые котики
        </NavLink>
      </nav>
    </header>
  );
};
