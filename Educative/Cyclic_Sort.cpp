
#include <iostream>
#include <vector>

using namespace std;
class CyclicSort
{

public:
	static void sort(vector<int> &nums)
	{
		// TODO: Write your code here
		int i = 0;
		while (i < nums.size())
		{
			int val = nums[i];
			if (val != i + 1)
			{
				std::swap(nums[val - 1], nums[i]);
			}
			else
			{
				i++;
			}
		}
	}
};

int main(int argc, char *argv[])
{
	vector<int> arr = {3, 1, 5, 4, 2};
	CyclicSort::sort(arr);
	for (auto num : arr)
	{
		cout << num << " ";
	}
	cout << endl;

	arr = vector<int>{2, 6, 4, 3, 1, 5};
	CyclicSort::sort(arr);
	for (auto num : arr)
	{
		cout << num << " ";
	}
	cout << endl;

	arr = vector<int>{1, 5, 6, 4, 3, 2};
	CyclicSort::sort(arr);
	for (auto num : arr)
	{
		cout << num << " ";
	}
	cout << endl;
};
