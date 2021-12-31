#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/**
 * @brief  time complexity:  sort + for loop + while loop
 *  N * logN + N * N ~= N*N
 */
class TripletSumToZero {
   public:
    static vector<vector<int>> searchTriplets(vector<int> &arr) {
        std::sort(arr.begin(), arr.end());
        vector<vector<int>> triplets;
        int n = arr.size();
        if (n < 3) {
            return triplets;
        }
        for (int i = 0; i < n; i++) {
            int low = i + 1;
            int high = n - 1;
            // skip duplicated numbers
            if (i > 0 && arr[i] == arr[i - 1]) {
                continue;
            }
            while (low < high) {
                if (arr[i] + arr[low] + arr[high] < 0) {
                    low++;
                    // skip duplicate
                    while (low < high && arr[low] == arr[low - 1]) {
                        low++;
                    }
                } else if (arr[i] + arr[low] + arr[high] > 0) {
                    high--;
                    // skip duplicate
                    while (low < high && arr[high] == arr[high + 1]) {
                        high--;
                    }
                } else {
                    triplets.push_back(vector<int>{arr[i], arr[low], arr[high]});
                    low++;
                    high--;
                }
            }
        }

        return triplets;
    }
};

int main(int argc, char *argv[]) {
    vector<int> vec = {-3, 0, 1, 2, -1, 1, -2};
    auto result = TripletSumToZero::searchTriplets(vec);
    for (auto vec : result) {
        cout << "[";
        for (auto num : vec) {
            cout << num << " ";
        }
        cout << "]";
    }
    cout << endl;

    vec = {-5, 2, -1, -2, 3};
    result = TripletSumToZero::searchTriplets(vec);
    for (auto vec : result) {
        cout << "[";
        for (auto num : vec) {
            cout << num << " ";
        }
        cout << "]";
    }
}
