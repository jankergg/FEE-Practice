function Tree(operator, left = null, right = null) {
    return {
        operator,
        left,
        right,
    };
}

var priorities = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
};

function ReversePlish2Tree(inputStr) {
    // var notation = 'AB+CD*E/-'.split('');
    // var notation = 'AB+CD*E/-'.split('');
    var notation = inputStr.split("");
    var stack = [];
    var temp = [];
    while (notation.length) {
        var char = notation.shift();
        if (priorities[char]) {
            var right_leaf = temp.pop() || stack.pop();
            var left_leaf = temp.pop() || stack.pop();
            stack.push(Tree(char, left_leaf, right_leaf));
        } else {
            temp.push(char);
        }
    }

    var root = stack.pop();
    return root;
}

console.log(JSON.stringify(ReversePlish2Tree("AB+CD*E/-"), null, 4));
