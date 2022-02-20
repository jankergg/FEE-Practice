#include <set>
#include <vector>

using namespace std;
class Solution {
   public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        multiset<int> win(nums.begin(), nums.begin() + k);
        auto mid = next(win.begin(), (k / 2));
        vector<double> medians;

        for (int i = k; i <= nums.size(); i++) {
            // put the current median
            if (k % 2 == 0) {
                medians.push_back((double(*mid) + *prev(mid, 1)) / 2);
            } else {
                medians.push_back(double(*mid));
            }

            if (i == nums.size()) {
                break;
            }

            win.insert(nums[i]);

            if (nums[i] < *mid) {
                mid--;
            }

            if (nums[i - k] <= *mid) {
                mid++;
            }

            win.erase(win.lower_bound(nums[i - k]));
        }
        return medians;
    }
};