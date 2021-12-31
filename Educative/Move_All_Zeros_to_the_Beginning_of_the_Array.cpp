#include <iostream>
#include <vector>

void move_zeros_to_left(int A[], int key) {
    int high = key - 1;
    int low = high - 1;
    while (high > 0 && low >= 0) {
        while (A[low] == 0) {
            low--;
        }
        if (low >= 0) {
            std::swap(A[low], A[high]);
            high--;
        }
    }
}

int main(int argc, char **argv) {
    using namespace std;
    int v[] = {1, 10, 20, 0, 59, 63, 0, 88, 0};
    int n = sizeof(v) / sizeof(v[0]);

    cout << "Original Array" << endl;

    for (int x = 0; x < n; x++) {
        cout << v[x];
        cout << ", ";
    }

    move_zeros_to_left(v, n);

    cout << endl
         << "After Moving Zeroes to Left" << endl;
    for (int i = 0; i < n; i++) {
        cout << v[i];
        cout << ", ";
    }
    return 0;
}
