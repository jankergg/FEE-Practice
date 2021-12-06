#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int Solution(vector<int> &nums, int k)
{
	int n = nums.size();
	int ans = 0;
	int sum = 0;
	unordered_map<int, int> map;

	for (int i = 0; i < n; i++)
	{
		sum += nums[i];
		if (sum == k)
		{
			ans++;
		}
		if (map.find(sum - k) != map.end())
		{
			ans += map[sum - k];
		}
		map[sum]++;
	}

	return ans;
}
int main()
{
	vector<int> v{1, 1, 1};
	cout << Solution(v, 2) << endl;
	return 0;
}