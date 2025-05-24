import { useState } from "react";
import "./App.css";
import explorer from './data/folderData';
import Folder from './components/folder';
import useTravereFile from "./hook/use-traverse-file";

function App() {
  const [explorerData, setExplorerData]=useState(explorer);
  const {insertFile}=useTravereFile();

  const handleInsertFile = (folderId, item, isFolder) => {
      const finalFiles = insertFile(explorerData, folderId, item, isFolder);
      setExplorerData(finalFiles);
  }

  return (
    <>
      <Folder handleInsertFile={handleInsertFile}  explorer={explorerData}/>
    </>
  );
};

export default App;
