#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;
/**
 * @brief  time complexity: O(N*2^N)
 */
class SubsetWithDuplicates
{
public:
	static vector<vector<int>> findSubsets(vector<int> &nums)
	{
		sort(nums.begin(), nums.end());
		vector<vector<int>> subsets;
		subsets.push_back(vector<int>());

		int start = 0, end = 0;
		for (int i = 0; i < nums.size(); i++)
		{
			start = 0;
			// if there is a duplicate, we only need to add new element based on the previous arrays
			if (i > 0 && nums[i] == nums[i - 1])
			{
				// start from last ending, notice that we haven't update the `end`, so
				start = end + 1;
			}
			// by default, the length should be the entire array
			end = subsets.size() - 1;
			for (int j = start; j <= end; j++)
			{
				vector<int> tmp(subsets[j]);
				tmp.push_back(nums[i]);
				subsets.push_back(tmp);
			}
		}

		return subsets;
	}
};

int main(int argc, char *argv[])
{
	vector<int> vec = {1, 3, 3};
	vector<vector<int>> result = SubsetWithDuplicates::findSubsets(vec);
	cout << "Here is the list of subsets: " << endl;
	for (auto vec : result)
	{
		for (auto num : vec)
		{
			cout << num << " ";
		}
		cout << endl;
	}

	vec = {1, 5, 3, 3};
	result = SubsetWithDuplicates::findSubsets(vec);
	cout << "Here is the list of subsets: " << endl;
	for (auto vec : result)
	{
		for (auto num : vec)
		{
			cout << num << " ";
		}
		cout << endl;
	}
}
