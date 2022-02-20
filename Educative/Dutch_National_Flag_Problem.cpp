#include <iostream>
#include <vector>
using namespace std;

class DutchFlag {
   public:
    static void sort(vector<int> &arr) {
        int low = 0, high = arr.size() - 1, i = 0;
        while (i <= high) {
            if (arr[i] == 0) {
                swap(arr[i], arr[low]);
                i++;
                low++;
            } else if (arr[i] == 1) {
                i++;
            } else {
                swap(arr[i], arr[high]);
                high--;
            }
        }
    }
};

int main(int argc, char *argv[]) {
    vector<int> arr = {1, 0, 2, 1, 0};
    DutchFlag::sort(arr);
    for (auto num : arr) {
        cout << num << " ";
    }
    cout << endl;

    arr = vector<int>{2, 2, 0, 1, 2, 0};
    DutchFlag::sort(arr);
    for (auto num : arr) {
        cout << num << " ";
    }
}