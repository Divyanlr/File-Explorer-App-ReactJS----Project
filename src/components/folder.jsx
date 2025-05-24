import { useState } from "react";

function Folder({ explorer, handleInsertFile }) {

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState(
        {
            visible: false,
            isFolder: null,
        }
    );

    const handleFile = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    };


    const handleAdd = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            console.log('input value --->> ', e.target.value);
            handleInsertFile(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({ ...setShowInput, visible: false });
        }
    }

    if (explorer.isFolder) {
        return (
            <>
                <div className="folder" onClick={() => {
                    setExpand(!expand);
                }}>
                    📂 {explorer.name}
                    <div>
                        <button onClick={(e) => handleFile(e, true)}>Folder +</button>
                        <button onClick={(e) => handleFile(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
                    {showInput.visible && (
                        <div className="inputText">
                            <span>{showInput.isFolder ? '📂' : '📄'}</span>
                            <input 
                                type="text"
                                onBlur={() => {
                                    setShowInput(() => ({
                                        ...showInput,
                                        visible: false
                                    }));
                                }}

                                onKeyDown={handleAdd}
                            />
                        </div>
                    )}
                    {explorer.items.map((exp) => (
                        <div className="inner_folder">
                            <Folder explorer={exp} key={exp.id}  handleInsertFile={handleInsertFile}/>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="file">
                    📄 {explorer.name}
                </div>
            </>
        );
    }
}

export default Folder;