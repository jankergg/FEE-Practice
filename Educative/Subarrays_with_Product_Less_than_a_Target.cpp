#include <deque>
#include <iostream>
#include <vector>
using namespace std;

class SubarrayProductLessThanK {
   public:
    static vector<vector<int>> findSubarrays(const vector<int>& arr, int target) {
        vector<vector<int>> result;
        deque<int> window;
        int multiply = 1;
        int start = 0;
        int n = arr.size();
        for (int i = 0; i < n; i++) {
            multiply *= arr[i];
            while (multiply >= target && start < n - 1) {
                multiply /= arr[start];
                start++;
            }
            for (int j = i; j >= start; j--) {
                window.push_front(arr[j]);
                result.push_back(vector<int>({window.begin(), window.end()}));
            }
            window.clear();
        }

        return result;
    }
};

int main(int argc, char* argv[]) {
    auto result = SubarrayProductLessThanK::findSubarrays(vector<int>{2, 3, 1, 3, 4, 5}, 30);
    for (auto vec : result) {
        cout << "[";
        for (auto num : vec) {
            cout << num;
        }
        cout << "]";
    }
    cout << endl;

    result = SubarrayProductLessThanK::findSubarrays(vector<int>{8, 2, 6, 5}, 50);
    for (auto vec : result) {
        cout << "[";
        for (auto num : vec) {
            cout << num;
        }
        cout << "]";
    }
}
