#ifndef EE29A1B4_080D_40FF_A643_3ED9C17B2285
#define EE29A1B4_080D_40FF_A643_3ED9C17B2285
#include <iostream>
#include <string>

void print(std::string name, int t)
{
	std::cout << name << ':' << t << std::endl;
}
void print(std::string name, int t, int m)
{
	std::cout << name << ':' << t << ',' << m << std::endl;
}

void print(std::string name, std::string t)
{
	std::cout << name << ':' << t << std::endl;
}

#endif /* EE29A1B4_080D_40FF_A643_3ED9C17B2285 */
