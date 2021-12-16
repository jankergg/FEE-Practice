#ifndef D371ED3E_B4D4_4D07_B470_20958341D103
#define D371ED3E_B4D4_4D07_B470_20958341D103
#include <iostream>
#include <functional>
#include <string>

template <typename T, typename R>
using Func = std::function<R(T)>;

template <typename F, typename R>
void expect(F f, R r)
{
	bool ret = f == r;
	if (ret)
	{
		std::cout
			<< "True" << std::endl;
	}
	else
	{
		std::cout
			<< "False"
			<< ", Expected " << r << ", Got: " << f << std::endl;
	}
}

#endif /* D371ED3E_B4D4_4D07_B470_20958341D103 */
