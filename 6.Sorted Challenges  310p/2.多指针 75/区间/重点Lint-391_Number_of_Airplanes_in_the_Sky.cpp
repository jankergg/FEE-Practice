//给出飞机的起飞和降落时间的列表，用序列 interval 表示. 请计算出天上同时最多有多少架飞机？
// 输入: [(1, 10), (2, 3), (5, 8), (4, 7)]
// 输出: 3
// 解释:
// 第一架飞机在1时刻起飞, 10时刻降落.
// 第二架飞机在2时刻起飞, 3时刻降落.
// 第三架飞机在5时刻起飞, 8时刻降落.
// 第四架飞机在4时刻起飞, 7时刻降落.
// 在5时刻到6时刻之间, 天空中有三架飞机.
/**
 * Definition of Interval:
 * classs Interval {
 *     int start, end;
 *     Interval(int start, int end) {
 *         this->start = start;
 *         this->end = end;
 *     }
 * }
 */
#include <iostream>
#include <vector>

using namespace std;

class Interval {
   public:
    int start, end;
    Interval(int start, int end) {
        this->start = start;
        this->end = end;
    }
};
class Solution {
   public:
    /**
     * @param airplanes: An interval array
     * @return: Count of airplanes are in the sky.
     */
    int countOfAirplanes(vector<Interval> &airplanes) {
        int start = 0;
        int end = 0;
        int n = airplanes.size();
        int count = 0;
        int most = INT_MIN;

        if (n == 0) {
            return 0;
        }
        vector<int> starts;
        vector<int> ends;
        for (auto &x : airplanes) {
            starts.push_back(x.start);
            ends.push_back(x.end);
        }
        std::sort(starts.begin(), starts.end());
        std::sort(ends.begin(), ends.end());

        while (start < n && end < n) {
            if (starts[start] < ends[end]) {
                count++;
                start++;
                most = std::max(most, count);
            } else {
                count--;
                end++;
            }
        }
        return most;
    }
};
int main(int arc, char **argv) {
    vector<Interval> itvs{
        Interval(10, 14),
        Interval(10, 15),
        Interval(10, 16),
        Interval(1, 10),
        Interval(2, 10),
        Interval(3, 10),
        Interval(4, 10),
    };
    Solution sl;
    int count = sl.countOfAirplanes(itvs);

    cout << "solution:" << count << endl;

    return 0;
}