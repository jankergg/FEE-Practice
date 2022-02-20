#include <iostream>
#include <vector>

#include "utils/print.h"

using namespace std;
// compare row by row, check if any two queuens are in the same line.
bool is_valid_move(int row, int col, vector<int>& solution) {
    for (int i = 0; i < row; i++) {
        int old_row = i;
        int old_col = solution[i];
        int dia_offset = row - old_row;

        if (old_col == col ||
            old_col == col + dia_offset ||
            old_col == col - dia_offset) return false;
    }
    return true;
}
void check_solution(int n, int row, vector<int>& solution, vector<vector<int>>& results) {
    // means that we've reached the bottom, which happens only when we found a solution
    if (n == row) {
        results.push_back(solution);
    }
    for (int i = 0; i < n; i++) {
        if (is_valid_move(row, i, solution)) {
            solution[row] = i;
            check_solution(n, row + 1, solution, results);
        }
    }
}
int solve_n_queens(int n, vector<vector<int>>& results) {
    // trackback solution
    vector<int> solution(n);
    check_solution(n, 0, solution, results);
    return results.size();
}

int main() {
    vector<vector<int>> results;

    int n = 4;
    int res = solve_n_queens(n, results);
    cout << "Total solutions count for " + to_string(n) + " queens: " + to_string(res) <<endl;
    for (auto x : results) {
        cout << '[';
        for (auto y : x) {
            cout << y;
        }
        cout << ']' << endl;
    }
    return 0;
}
//