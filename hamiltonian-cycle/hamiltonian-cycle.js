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