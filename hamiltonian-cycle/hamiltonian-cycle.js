/* Given a graph, identify all cycles that uses each and every vertex once and only once.
    The result should contain no duplicates.

    Note, if there're cycles in the graph, the graph can start at any vertex,
    hencd we can choose any vertex as the starting point without affecting the
    correctness of the result. The benefit of this choice is to eliminate duplicates.

    The following impplementation uses a typical back tracking algorithm.

    Explanation:
    https://www.youtube.com/watch?v=dQr4wZCiJJ4
*/

function backtrack(matrix, path, step, visited, ans) {

    console.log(step, path)

    let k=matrix.length;
    if(step==k) {
        if(matrix[path[k-1]][0]==1) {
            ans.push(path.slice(0));
        }
        return;
    }

    for(let i=1; i<k; i++) {
        if(visited[i]) {
            continue;
        }

        if(matrix[path[step-1]][i]==1) {
            path[step]=i;
            visited[i]=true;
            backtrack(matrix, path, step+1, visited, ans);
            visited[i]=false;
        }
    }
}

function hamiltonianCycle(matrix) {

    let ans=[];
    let visited=Array(matrix.length).fill(false);
    let path=Array(matrix.length).fill(0);

    backtrack(matrix, [0], 1, visited, ans);

    return ans;
}

let testcase1=[
    [0,1,1,0,1],
    [1,0,1,1,1],
    [1,1,0,1,0],
    [0,1,1,0,1],
    [1,1,0,1,0]
];

let ret=hamiltonianCycle(testcase1);

console.log(ret);