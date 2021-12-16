#include <iostream>
#include <vector>
using namespace std;

class Pair
{
public:
	int first, second;
	Pair(int x, int y) : first(x), second(y)
	{
	}
};

vector<Pair> merge_intervals(vector<Pair> &v)
{
	vector<Pair> result;
	int low = v[0].first;
	int high = v[0].second;
	for (int i = 1; i < v.size(); i++)
	{
		if (v[i].first > high)
		{
			result.push_back(Pair(low, high));
			low = v[i].first;
			high = v[i].second;
		}
		else
		{
			high = max(high, v[i].second);
		}
	}
	result.push_back(Pair(low, high));
	// write your code here
	return result;
}

int main()
{
	vector<Pair> v{
		Pair(1, 5),
		Pair(3, 7),
		Pair(4, 6),
		Pair(6, 8),
		Pair(10, 12),
		Pair(11, 15)};

	vector<Pair> result = merge_intervals(v);

	for (int i = 0; i < result.size(); i++)
	{
		cout << "[" << result[i].first << ", " << result[i].second << "] ";
	}
}