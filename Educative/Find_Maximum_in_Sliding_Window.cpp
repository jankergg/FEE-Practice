#include <iostream>
#include <vector>
#include <deque>

std::vector<int> find_max_sliding_window(std::vector<int> &v, int window_size)
{
	std::vector<int> result;
	// double-end que to store indeices of element
	std::deque<int> window;
	int n = v.size();
	// TODO: edge case
	if (n == 0 || window_size > n)
	{
		return result;
	}

	// this is very important
	// this will make sure that we only keep top k elements in _window, and sorted descendingly
	// TODO: Mark: error warnings
	for (int i = 0; i < window_size; i++)
	{
		while (window.size() > 0 && v[i] > v[window.back()])
		{
			window.pop_back();
		}
		window.push_back(i);
	}

	result.push_back(v[window.front()]);

	for (int i = window_size; i < n; i++)
	{
		while (window.size() > 0 && v[i] > v[window.back()])
		{
			window.pop_back();
		}
		window.push_back(i);

		// as window slides, check if the first element still fit
		// TODO: Mark: error warnings
		if (window.size() > 0 && window.front() <= i - window_size)
		{
			window.pop_front();
		}

		result.push_back(v[window.front()]);
	}

	return result;
}
int main(int argc, char **argv)
{
	std::vector<int> testv{1, 2, 3, 4, 3, 2, 1, 2, 5};
	std::vector<int> testv2{1, 2, 3, 4, 3, 2, 1, 2, 5};
	auto res = find_max_sliding_window(testv, 4);
	for (auto x : res)
	{
		std::cout << x << ',';
	}
	return 0;
}