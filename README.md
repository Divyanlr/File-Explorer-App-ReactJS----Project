📁 React Folder Explorer

A simple React application to simulate a file/folder explorer with nested folder structure. Users can dynamically add folders and files into any folder level.

---

🚀 Features

- Expand/Collapse folder structure
  
- Add new folders and files dynamically
  
- Visual distinction between folders 📂 and files 📄
  
- Recursive rendering of nested items

---

📦 Folder Structure

├── public/

├── src/

│ ├── components/

│ │ └── Folder.jsx # Recursive folder component

│ ├── data/

│ │ └── folderData.js # Initial data structure

│ ├── hook/

│ │ └── use-traverse-file.js # Logic to insert files/folders

│ ├── App.css

│ ├── App.jsx

│ └── index.js

---

🧠 How It Works

🔹 The folder structure is stored in a nested object (explorer).

🔹 Folder component recursively renders its child folders/files.

🔹 use-traverse-file custom hook handles adding new files/folders by modifying the tree structure.

---

✨ Future Improvements

😎 Add delete and rename functionality

😎 Save data using localStorage or a backend

😎 Drag and drop to move items

😎 Search functionality
