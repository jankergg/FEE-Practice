// @algorithm @lc id=1171 lang=cpp
// @title shortest-path-in-binary-matrix

#include <iostream>
#include <vector>
#include <queue>
#include <string>
using namespace std;
// @test([[0,1],[1,0]])=2
// @test([[0,0,0],[1,1,0],[1,1,0]])=4
// @test([[1,0,0],[1,1,0],[1,1,0]])=-1
class Solution
{
private:
    vector<vector<int>> visited;
    bool isVisited(const int &x, const int &y)
    {
        return visited[x][y] == 1;
    };

public:
    int shortestPathBinaryMatrix(vector<vector<int>> &grid)
    {
        int paths = 0;
        int m = grid.size();
        // left-top, top, right-top, right, right-bottom, bottom, left-bottom, left
        int pos[8][2]{
            {-1, -1}, {0, -1}, {1, -1}, {1, 0}, {1, 1}, {0, 1}, {-1, 1}, {-1, 0}};
        queue<int[2]> q;

        if (grid[0][0] == 1 || grid[m - 1][m - 1] == 1)
        {
            return -1;
        }
        q.push({0, 0});
        while (q.size())
        {
            auto point = q.front();
            q.pop();
            for (const auto &p : pos)
            {
                int x = p[0];
                int y = p[1];
                if (x > 0 && x < m && y > 0 && y < m && grid[x][y] == 0 && !isVisited(x, y))
                {
                    paths++;
                    if (x == m && y == m)
                    {
                        return paths;
                    }
                    visited[x][y] = 1;
                    q.push({x, y});
                }
            }
        }

        return -1;
    }
};