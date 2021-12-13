#include <iostream>
#include <vector>

int find_least_common_number(std::vector<int> &arr1, std::vector<int> &arr2, std::vector<int> &arr3)
{

	int i = 0, j = 0, k = 0;
	while (i < arr1.size() && j < arr2.size() && k < arr3.size())
	{
		if (arr1[i] == arr2[j] && arr2[j] == arr3[k])
		{
			return arr1[i];
		}

		int mini_val = std::min(std::min(arr1[i], arr2[j]), arr3[k]);

		if (mini_val == arr1[i])
		{
			i++;
		}
		else if (mini_val == arr2[j])
		{
			j++;
		}
		else if (mini_val == arr3[k])
		{
			k++;
		}
	}

	return -1;
}

int main(int argc, char **argv)
{
	std::cout << '1' << std::endl;
	return 0;
}