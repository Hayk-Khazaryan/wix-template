import "./style.css"
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import data from "./data"
import MenuFolder from "./MenuFolder"
import Checkbox from '@mui/material/Checkbox'


function FileBlock() {
       const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
       return (
              <div className="fileBlock-wrapper">
                     {
                            data.map(item => (
                                   <div className="fileBlock" key={item.id}>
                                          <div className="icon-textes">
                                                 <Checkbox className="checkbox-none" {...label} />
                                                 <div className="background-none"></div>
                                                 <FolderOpenIcon className="folder" />
                                                 <div>
                                                        <p className="title">{item.title}</p>
                                                        <p className="text">{item.text}</p>
                                                 </div>
                                          </div>
                                          <div className="icon-date">
                                                 <p className="date">{item.date}</p>
                                                 <MenuFolder />
                                          </div>
                                   </div>
                            ))
                     }
              </div>
       )
}


export default FileBlock