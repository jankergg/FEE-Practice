#include <algorithm>
#include <iostream>
#include <limits>
#include <vector>

using namespace std;

class TripletSumCloseToTarget {
   public:
    static int searchTriplet(vector<int> &arr, int targetSum) {
        // sort the array
        sort(arr.begin(), arr.end());
        int min_sum = INT_MAX;
        int n = arr.size();
        for (int i = 0; i < n - 2; i++) {
            int low = i + 1;
            int high = n - 1;
            while (low < high) {
                int sum = arr[i] + arr[low] + arr[high];
                int prev_diff = targetSum - min_sum;
                int now_diff = targetSum - sum;
                if (now_diff == 0) {
                    // we've found a answer, just return it and break the loop.
                    return now_diff;
                }
                // if we found 2 diff has the same abs value, then pick the smaller one.
                if (abs(now_diff) < abs(prev_diff) || (abs(now_diff) == abs(prev_diff) && now_diff > prev_diff)) {
                    min_sum = sum;
                }
                // diff bigger than 0 means that our sum is smaller than the targetSum
                if (now_diff > 0) {
                    low++;
                } else {
                    high--;
                }
            }
        }
        return min_sum;
    }
};

int main(int argc, char *argv[]) {
    vector<int> vec = {-2, 0, 1, 2};
    cout << TripletSumCloseToTarget::searchTriplet(vec, 2) << endl;
    vec = {-3, -1, 1, 2};
    cout << TripletSumCloseToTarget::searchTriplet(vec, 1) << endl;
    vec = {1, 0, 1, 1};
    cout << TripletSumCloseToTarget::searchTriplet(vec, 100) << endl;
}
