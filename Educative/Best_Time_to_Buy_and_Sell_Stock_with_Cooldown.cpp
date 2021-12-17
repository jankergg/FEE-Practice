#include <iostream>
#include <vector>
/**
 (Rest) s0 <-- s2
		 \    ^
	  buy \  / sell
		  V /
		s1 (Rest)

rest: s0[i] = max(s0[i - 1], s2[i - 1]); // Stay at s0, or rest from s2
buy: s1[i] = max(s1[i - 1], s0[i - 1] - prices[i]); // Stay at s1, or buy from s0
sell: s2[i] = s1[i - 1] + prices[i]; // Only one way from s1

s0[0] = 0; // At the start, you don't have any stock if you just rest
s1[0] = -prices[0]; // After buy, you should have -prices[0] profit. Be positive!
s2[0] = INT_MIN; // Lower base case
 */
int maxProfit(std::vector<int> &prices)
{
  int n = prices.size();
  std::vector<int> s0(n, 0); // just rest
  std::vector<int> s1(n, 0); // after buy, then do nothing
  std::vector<int> s2(n, 0); //
  s0[0] = 0;
  s1[0] = -prices[0];
  s2[0] = INT_MIN;
  for (int i = 1; i < n; i++)
  {
    s0[i] = std::max(s0[i - 1], s2[i - 1]);
    s1[i] = std::max(s1[i - 1], s0[i - 1] - prices[i]);
    s2[i] = s1[i - 1] + prices[i];
  }
  return std::max(s0[prices.size() - 1], s2[prices.size() - 1]);
}
// solution 2:
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75927/Share-my-thinking-process
// buy[i] means before day i what is the maxProfit for any sequence end with buy.
// sell[i] means before day i what is the maxProfit for any sequence end with sell.
// rest[i] means before day i what is the maxProfit for any sequence end with rest.
// buy[i]  = max(rest[i-1]-price, buy[i-1])
// sell[i] = max(buy[i-1]+price, sell[i-1])
// rest[i] = max(sell[i-1], buy[i-1], rest[i-1])
// int maxProfit(vector<int> &prices) {
//     int buy(INT_MIN), sell(0), prev_sell(0), prev_buy;
//     for (int price : prices) {
//         prev_buy = buy;
//         buy = max(prev_sell - price, buy);
//         prev_sell = sell;
//         sell = max(prev_buy + price, sell);
//     }
//     return sell;
// }

int main(int argc, char **argv)
{
  int a = 0, b = 1;

  auto func = [&](int a, int b) {
    return a * b;
  };

  std::cout << func(a, b) << std::endl;
  return 0;
}
