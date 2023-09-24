// const treeNodes = [7, 6]
// const treeFrom = [1, 2, 3, 3, 1, 1];
// const treeTo = [2, 3, 4, 5, 6, 7];

const treeNodes = [2, 1]
const treeFrom = [2];
const treeTo = [1];

function isSpecial(treeNodes, treeFrom, treeTo) {
    const edges = treeTo.filter(i => !treeFrom.includes(i));
    const newedges = treeFrom.filter(i => !treeTo.includes(i));
    const array = [];
    for (let i = 0; i < edges[edges.length - 1]; i++) {
        edges[i] ? array.push(1) : array.push(0);
        console.log(edges[i])
    }
    for (let i = 0; i < newedges[edges.length - 1]; i++) {
        newedges[i] && array.push(1);
        console.log(newedges[i])
    }
    array.sort((a, b) => a - b);
    return array;
}

console.log(isSpecial(treeNodes, treeFrom, treeTo));