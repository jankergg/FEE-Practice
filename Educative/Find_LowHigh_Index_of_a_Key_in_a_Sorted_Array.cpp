#include <iostream>
#include <vector>

int find_low_index(std::vector<int> &arr, int key)
{
	int low = 0, high = arr.size() - 1;
	int mid = low + (high - low) / 2;
	while (low <= high)
	{
		if (arr[mid] >= key)
		{
			high = mid - 1;
		}
		else
		{
			low = mid + 1;
		}
		mid = low + (high - low) / 2;
	}
	if (low < arr.size() && arr[low] == key)
	{
		return low;
	}
	return -1;
}

int find_high_index(std::vector<int> &arr, int key)
{
	int low = 0, high = arr.size() - 1;
	int mid = low + (high - low) / 2;
	while (low <= high)
	{
		if (arr[mid] > key)
		{
			high = mid - 1;
		}
		else
		{
			low = mid + 1;
		}
		mid = low + (high - low) / 2;
	}
	if (high >= 0 && high < arr.size() && arr[high] == key)
	{
		return high;
	}
	return -1;
}

int main(int argc, char *argv[])
{
	{
		std::vector<int> arr = {1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6};
		int key = 5;
		int low = find_low_index(arr, key);
		int high = find_high_index(arr, key);
		std::cout << "Low Index of " << key << ": " << low << std::endl;
		std::cout << "High Index of " << key << ": " << high << std::endl;

		key = -2;
		low = find_low_index(arr, key);
		high = find_high_index(arr, key);
		std::cout << "Low Index of " << key << ": " << low << std::endl;
		std::cout << "High Index of " << key << ": " << high << std::endl;
	}
}