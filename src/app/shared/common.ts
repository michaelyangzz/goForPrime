
export function ConvertMenuListToTree(list) {
    let map = {};
    let tree = [];
    let node;
    let i;
    for (i = 0; i < list.length; i++) {
        map[list[i].id] = i; // initialize the map
        list[i].childs = [];
    }
    for (i = 0; i < list.length; i++) {
        node = list[i];
        if (node.parentId !== null) {
            if (list[map[node.parentId]])
                list[map[node.parentId]].childs.push(node);
        } else {
            tree.push(node);
        }
    }
    return tree;
}
