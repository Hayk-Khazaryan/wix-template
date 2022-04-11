import "./style.css"
import SearchIcon from "@mui/icons-material/Search"
import { useEffect, useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import StraightIcon from "@mui/icons-material/Straight"
import Menu from "./Menu"
import FileBlock from "../../shared/FileBlock"

function ToolsTipsWrapper() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
  const [isClick, setIsClick] = useState(false)
  const MakeInput = (isClick) => {
    if (!isClick) {
      setIsClick(true)
    } else {
      setIsClick(false)
    }
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } }
  return (
    <div className="toolsTipsWrapper">
      <p className="title">TOOLS & TIPS</p>
      <p className="text">
        Use this area to upload files you wish to share with your users. You can
        manage who has access to your files and what they can do, such as view &
        download, upload items and more.
      </p>
      <div className="d-f">
        <p className="files">Files</p>
        <div className="search-button">
          {!isClick ? (
            <div className="file-plus">
              <SearchIcon onClick={() => MakeInput()} />
              <button className="file-button">+ File</button>
            </div>
          ) : (
            <div className="afther-click">
              <SearchIcon onClick={(isClick) => MakeInput(isClick)} />
              <input className="make-input" type="search" />
              <button className="search-afther">Search</button>
            </div>
          )}
        </div>
      </div>
      <div className="files-update">
        <div className="checkbox-name">
          <Checkbox className="checkbox-none" {...label} />
          <div className="background-none"></div>
          <p className="name">Name</p>
          <StraightIcon className="arrow-up" />
        </div>
        <div className="last-update">
          <p className="name">Last Update</p>
          <Menu />
        </div>
      </div>
      <FileBlock />
    </div>
  )
}

export default ToolsTipsWrapper
