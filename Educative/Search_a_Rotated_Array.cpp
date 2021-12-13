#include <iostream>
#include <vector>

int binary_search_rotated(std::vector<int> &arr, int key)
{
	int left = 0, right = arr.size() - 1;
	int mid = left + (right - left) / 2;

	while (left <= right)
	{

		if (arr[mid] == key)
		{
			return mid;
		}
		// 判断是不是在左边的单调区间
		if (key >= arr[left] && arr[mid] >= arr[left] && key < arr[mid])
		{
			right = mid - 1;
		}
		// 判断是不是在右边的单调区间
		else if (key <= arr[right] && arr[mid] <= arr[right] && key > arr[mid])
		{
			left = mid + 1;
		}
		else if (arr[mid] >= arr[right])
		{
			left = mid + 1;
		}
		else if (arr[mid] <= arr[left])
		{
			right = mid - 1;
		}

		mid = left + (right - left) / 2;
	}
	return -1;
}

int main(int argc, char **argv)
{
	std::vector<int> v1{4, 5, 6, 1, 2, 3};
	std::vector<int> v2{4, 5, 6, 1, 2, 3};
	int r1 = binary_search_rotated(v1, 6);
	int r2 = binary_search_rotated(v2, 3);
	std::cout << "r1:" << (r1 == 2 ? "true" : "false") << std::endl;
	std::cout << "r2:" << (r2 == 5 ? "true" : "false") << std::endl;
	return 0;
}