#include <iostream>
#include <vector>

using namespace std;

class FloorOfANumber {
   public:
    static int searchFloorOfANumber(const vector<int>& arr, int key) {
        int start = 0, end = arr.size() - 1;
        if (key > arr[end]) {
            return -1;
        }
        if (key < arr[start]) {
            return start;
        }
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] > key) {
                end = mid - 1;
            } else if (arr[mid] < key) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return start;
    }
};

int main(int argc, char* argv[]) {
    cout << FloorOfANumber::searchFloorOfANumber(vector<int>{4, 6, 10}, 6) << endl;
    cout << FloorOfANumber::searchFloorOfANumber(vector<int>{1, 3, 8, 10, 15}, 12) << endl;
    cout << FloorOfANumber::searchFloorOfANumber(vector<int>{4, 6, 10}, 17) << endl;
    cout << FloorOfANumber::searchFloorOfANumber(vector<int>{4, 6, 10}, -1) << endl;
}