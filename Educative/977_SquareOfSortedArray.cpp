#include <iostream>
#include <vector>

std::vector<int> sortedSquares(std::vector<int> &nums)
{
	int high = nums.size() - 1;
	int low = 0;
	std::vector<int> res;
	while (low <= high)
	{
		if (std::abs(nums[low]) > std::abs(nums[high]))
		{
			res.push_back(nums[low] * nums[low]);
			low++;
		}
		else
		{
			res.push_back(nums[high] * nums[high]);
			high--;
		}
	}

	std::reverse(res.begin(), res.end());
	return res;
}
int main(int argc, char **argv)
{
	std::vector<int> v1{-7, -6, -5, -4, -3, -2, -1};
	std::vector<int> v2{-4, -1, 0, 3, 10};
	std::vector<int> v3{4, 5, 6, 7, 10};
	//	[-4,-1,0,3,10]
	//	[3,-1,0,-4,10]
	//	[0,-1,3,-4,10]
	auto s = sortedSquares(v3);
	std::cout << '[';
	for (auto x : s)
	{
		std::cout << x << ',';
	}
	std::cout << ']' << std::endl;
	return 0;
}