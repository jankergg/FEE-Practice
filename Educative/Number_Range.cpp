#include <iostream>
#include <vector>
using namespace std;

class FindRange {
   public:
    static pair<int, int> findRange(const vector<int> &arr, int key) {
        pair<int, int> result(-1, -1);
        result.first = findLow(arr, key);
        if (result.first != -1) {
            result.second = findHigh(arr, key);
            // cout << result.first << endl;
        }
        return result;
    }

   private:
    static int findLow(const vector<int> &arr, int key) {
        int start = 0, end = arr.size() - 1;
        int res = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] < key) {
                start = mid + 1;
            } else if (arr[mid] >= key) {
                // if we meet an element equals to key, tring to find it's left side
                if (arr[mid] == key) {
                    res = mid;
                }
                end = mid - 1;
            }
        }
        return res;
    }
    static int findHigh(const vector<int> &arr, int key) {
        int start = 0, end = arr.size() - 1;
        int res = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] < key) {
                start = mid + 1;
            } else if (arr[mid] >= key) {
                if (arr[mid] == key) {
                    res = mid;
                }
                // if we meet an element equals to key, tring to find it's right side
                start = mid + 1;
            }
        }
        return res;
    }
};

int main(int argc, char *argv[]) {
    pair<int, int> result = FindRange::findRange(vector<int>{4, 6, 6, 6, 9}, 6);
    cout << "Range: [" << result.first << ", " << result.second << "]" << endl;
    result = FindRange::findRange(vector<int>{1, 3, 8, 10, 15}, 10);
    cout << "Range: [" << result.first << ", " << result.second << "]" << endl;
    result = FindRange::findRange(vector<int>{1, 3, 8, 10, 15}, 12);
    cout << "Range: [" << result.first << ", " << result.second << "]" << endl;
}
