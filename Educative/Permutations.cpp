#include <iostream>
#include <queue>
#include <vector>

using namespace std;
class Permutations
{
public:
	static vector<vector<int>> findPermutations(const vector<int> &nums)
	{
		vector<vector<int>> result;
		queue<vector<int>> permutations;
		permutations.push(vector<int>());
		for (auto currentNumber : nums)
		{
			int n = permutations.size();
			for (int j = 0; j < n; j++)
			{
				vector<int> old_perm = permutations.front();
				permutations.pop();
				for (int k = 0; k <= old_perm.size(); k++)
				{
					vector<int> new_perm(old_perm);
					new_perm.insert(new_perm.begin() + k, currentNumber);
					if (new_perm.size() == nums.size())
					{
						result.push_back(new_perm);
					}
					else
					{
						permutations.push(new_perm);
					}
				}
			}
		}
		return result;
	}
};

int main(int argc, char *argv[])
{
	vector<vector<int>> result = Permutations::findPermutations(vector<int>{1, 3, 5});
	cout << "Here are all the permutations: " << endl;
	for (auto vec : result)
	{
		for (auto num : vec)
		{
			cout << num << " ";
		}
		cout << endl;
	}
}
