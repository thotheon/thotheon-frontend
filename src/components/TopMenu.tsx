import "./TopMenu.scss"

import React, { ReactElement } from "react"

import { Link } from "react-router-dom"
//import ThemeChanger from "./ThemeChanger"
//import Web3Status from "./Web3Status"
import classNames from "classnames"
import logo from "../assets/Iris.png"
import { useTranslation } from "react-i18next"

interface Props {
  activeTab: string
}

function TopMenu({ activeTab }: Props): ReactElement {
  const { t } = useTranslation()

  return (
    <header className="top">
      <h1>
        <Link to="/">
          <img className="logo-img" alt="logo" src={logo} />
          <h1 className="logo">Iris</h1>
        </Link>
      </h1>

      <ul className="nav">
        <li>
          <Link to="/" className={classNames({ active: activeTab === "swap" })}>
            {t("swap")}
          </Link>
        </li>
        <li>
          <Link
            to="/pools"
            className={classNames({ active: activeTab === "pools" })}
          >
            {t("pools")}
          </Link>
        </li>
        <li>
          <Link
            to="/risk"
            className={classNames({ active: activeTab === t("risk") })}
          >
            {t("risk")}
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default TopMenu
