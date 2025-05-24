const explorer = {
  id: 1,
  name: "WORKSPACE",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "package.json",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 4,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 8,
              name: "sidebar.jsx",
              isFolder: false,
              items: [],
            },
            {
              id: 9,
              name: "main.js",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 6,
          name: "App.jsx",
          isFolder: false,
          items: [],
        },
        {
          id: 7,
          name: "index.css",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

export default explorer;