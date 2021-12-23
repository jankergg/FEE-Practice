#include <iostream>
#include <vector>
#include <numeric>
#include "utils/print.h"

class PartitionSet
{
public:
	bool canPartition(const std::vector<int> &num)
	{
		int sum = std::accumulate(num.begin(), num.end(), 0);
		if (sum % 2 != 0)
		{
			return false;
		}
		std::vector<std::vector<int>> dp(num.size(), std::vector<int>(sum / 2 + 1, -1));
		return this->canPartitionRec(dp, num, sum / 2, 0);
	}

private:
	bool canPartitionRec(std::vector<std::vector<int>> &dp, const std::vector<int> &num, int sum, int current_index)
	{
		if (sum == 0)
		{
			return true;
		}
		if (num.empty() || current_index >= num.size())
		{
			return false;
		}
		if (dp[current_index][sum] == -1)
		{
			if (num[current_index] <= sum && canPartitionRec(dp, num, sum - num[current_index], current_index + 1))
			{
				dp[current_index][sum] = 1;
				return true;
			}
			dp[current_index][sum] = canPartitionRec(dp, num, sum, current_index + 1) ? 1 : 0;
		}
		return dp[current_index][sum] == 1 ? true : false;
	};
};

int main(int argc, char *argv[])
{
	PartitionSet ps;
	std::vector<int> num = {1, 2, 3, 4};
	print("canPartition", ps.canPartition(num));
	num = std::vector<int>{1, 1, 3, 4, 7};
	print("canPartition", ps.canPartition(num));
	num = std::vector<int>{2, 3, 4, 6};
	print("canPartition", ps.canPartition(num));
}
