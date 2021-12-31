#include <iostream>
#include <vector>

#include "utils/print.h"

using namespace std;

class MergeSort {
   private:
    vector<int> emp;

   public:
    vector<int> sort(vector<int> &arr, int left, int right) {
        if (left < right) {
            int middle = left + (right - left) / 2;
            auto res1 = sort(arr, left, middle);
            auto res2 = sort(arr, middle + 1, right);
            return merge(res1, res2);
        }
        return vector<int>({arr[left]});
    }

    vector<int> merge(vector<int> &arr1, vector<int> &arr2) {
        vector<int> result;
        if (!arr1.size() && !arr2.size()) {
            return result;
        }
        if (!arr1.size()) {
            return arr2;
        }
        if (!arr2.size()) {
            return arr1;
        }
        int l = 0, r = 0;
        int n1 = arr1.size() - 1;
        int n2 = arr2.size() - 1;
        while (l <= n1 && r <= n2) {
            if (arr1[l] <= arr2[r]) {
                result.push_back(arr1[l]);
                l++;
            } else {
                result.push_back(arr2[r]);
                r++;
            }
        }
        while (l <= n1) {
            result.push_back(arr1[l]);
            l++;
        }
        while (r <= n2) {
            result.push_back(arr2[r]);
            r++;
        }
        return result;
    }
};

int main(int argc, char **argv) {
    vector<int> test{5, 1, 6, 1, 6, 8, 1, 303, 3, 5, 9, 1, 52};
    // vector<int> test{5, 10};
    // vector<int> test2{2, 3};
    MergeSort Ms;
    auto Sorted = Ms.sort(test, 0, test.size() - 1);
    for (auto x : Sorted) {
        cout << x << ',';
    }
    return 0;
}
