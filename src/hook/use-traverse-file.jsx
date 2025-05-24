const useTravereFile = () => {
    function insertFile(tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            });
            return tree;
        }

        tree.items = tree.items.map((child) => {
            return insertFile(child, folderId, item, isFolder);
        });

        return tree;
    }

    return { insertFile };
};

export default useTravereFile;
