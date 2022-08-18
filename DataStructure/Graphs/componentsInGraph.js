/**
 * 
 *      There are (2 X N) nodes in an undirected graph, and a 
 *      number of edges connecting some nodes. In each edge, 
 *      the first value will be between 1 and N, inclusive. 
 *      The second node will be between N + 1 and 2 X N, inclusive. 
 *      Given a list of edges, determine the size of the 
 *      smallest and largest connected components that have 2
 *      or more nodes. A node can have any number of connections. 
 *      The highest node value will always be connected to at least 1
 *      other node.
 * 
 *      Hay (2 X N) nodos en un gráfico no dirigido, y un
 *      número de aristas que conectan algunos nodos. En cada borde,
 *      el primer valor estará entre 1 y N, ambos inclusive.
 *      El segundo nodo estará entre N + 1 y 2 X N, ambos inclusive.
 *      Dada una lista de aristas, determine el tamaño de la
 *      componentes conectados más pequeños y más grandes que tienen 2
 *      o más nodos. Un nodo puede tener cualquier número de conexiones.
 *      El valor de nodo más alto siempre estará conectado a al menos 1
 *      otro nodo.
 * 
 */


function componentsInGraph(gb) {
    /*
         * Write your code here.
    */
    const n = gb.length;
    // initialize disjoint sets
    const sets = Array(2 * n);
    for (let i = 0; i < 2 * n; i++) {
        sets[i] = {
            count: 1,
            idx: i,
        };
    }

    gb.forEach((e) => {
        const s1 = findSet(sets, e[0] - 1);
        const s2 = findSet(sets, e[1] - 1);
        if (s1.idx !== s2.idx) {
            // merge two sets
            mergeSets(s1, s2);
        }
    });

    let min = Infinity, max = 0;
    sets.forEach((set, idx) => {
        if (set.idx === idx) {
            if (max < set.count) {
                max = set.count;
            }
            if (set.count > 1 && min > set.count) {
                min = set.count;
            }
        }
    });
    return [min, max];

}

function findSet(sets, d) {
    let s = d;
    while (sets[s].idx !== s) {
        s = sets[s].idx;
    }
    return sets[s];
}

function mergeSets(set1, set2) {
    let small = set1;
    let large = set2;
    if (set1.count > set2.count) {
        small = set2;
        large = set1;
    }
    small.idx = large.idx;
    large.count = small.count + large.count;
    small.count = large.count;
}

console.log(componentsInGraph([[1, 6], [2, 7], [3, 8], [4, 9], [2, 6]]))