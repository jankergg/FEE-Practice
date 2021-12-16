#include <iostream>
#include <vector>
#include "utils/assertion.h"

int binary_search_rotated(std::vector<int> &arr, int key)
{
	int left = 0, right = arr.size() - 1;
	int mid = left + (right - left) / 2;
	while (left <= right)
	{
		if (key == arr[mid] && arr[mid - 1] != arr[mid])
		{
			return mid;
		}

		if (key >= arr[left] && key < arr[mid] && arr[mid] >= arr[left])
		{
			right = mid - 1;
		}
		else if (key > arr[mid] && key <= arr[right] && arr[mid] <= arr[right])
		{
			left = mid + 1;
		}
		else if (arr[mid] > arr[left])
		{
			left = mid + 1;
		}
		else if (arr[mid] < arr[right])
		{
			right = mid - 1;
		}

		mid = left + (right - left) / 2;
	}

	return -1;
}

int main(int argc, char **argv)
{
	std::vector<int> v1{7, 8, 9, 9, 9, 1, 1, 2, 2, 3, 4, 5, 6};
	std::vector<int> v2{0, 1, 1, 2, 2, 3, 4, 5, 6};
	expect<int, int>(
		binary_search_rotated(v1, 7),
		0);
	expect<int, int>(
		binary_search_rotated(v2, 1),
		1);
	return 0;
}