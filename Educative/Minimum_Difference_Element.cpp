#include <iostream>
#include <vector>

using namespace std;

class MinimumDifference {
   public:
    static int searchMinDiffElement(const vector<int>& arr, int key) {
        int start = 0, end = arr.size() - 1;
        if (key >= arr[end]) {
            return arr[end];
        }
        if (key <= arr[start]) {
            return arr[start];
        }
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] > key) {
                end = mid - 1;
            } else if (arr[mid] < key) {
                start = mid + 1;
            } else {
                return arr[mid];
            }
        }
        return abs(arr[start] - key) > abs(arr[end] - key) ? arr[end] : arr[start];
    }
};

int main(int argc, char* argv[]) {
    cout << MinimumDifference::searchMinDiffElement(vector<int>{4, 6, 10}, 7) << endl;
    cout << MinimumDifference::searchMinDiffElement(vector<int>{4, 6, 10}, 4) << endl;
    cout << MinimumDifference::searchMinDiffElement(vector<int>{1, 3, 8, 10, 15}, 12) << endl;
    cout << MinimumDifference::searchMinDiffElement(vector<int>{4, 6, 10}, 17) << endl;
}
