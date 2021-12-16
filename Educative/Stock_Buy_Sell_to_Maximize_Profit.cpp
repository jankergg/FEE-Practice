#include <iostream>
#include <vector>

std::tuple<int, int> find_current_buy_sell_price_stock_prices(int *array, int size)
{
	int current_buy = array[0];
	int current_profit = INT_MIN;
	int sell_price = array[1];
	int total_profit = sell_price - current_buy;

	for (int i = 1; i < size; i++)
	{
		current_profit = array[i] - current_buy;
		if (current_profit > total_profit)
		{
			total_profit = current_profit;
			sell_price = array[i];
		}
		if (array[i] < current_buy)
		{
			current_buy = array[i];
		}
	}

	return std::make_pair(sell_price - total_profit, sell_price);
}
int main(int argc, char **argv)
{
	using namespace std;
	int array[] = {1, 2, 3, 4, 3, 2, 1, 2, 5};
	tuple<int, int> result;
	result = find_current_buy_sell_price_stock_prices(array, 9);
	cout << "buy Price: " << get<0>(result) << ", sell Price: " << get<1>(result) << endl;

	int array2[] = {8, 6, 5, 4, 3, 2, 1};
	result = find_current_buy_sell_price_stock_prices(array2, 7);
	cout << "buy Price: " << get<0>(result) << ", sell Price: " << get<1>(result) << endl;

	return 0;
}
