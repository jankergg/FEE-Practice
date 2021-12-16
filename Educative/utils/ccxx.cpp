#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <regex>

int main(int argc, char **argv)
{
	std::ifstream source("../utils/template.cpp");
	std::string line;
	std::string fileName;
	std::regex r("/");

	for (int i = 1; i < argc; i++)
	{
		if (fileName.empty())
		{
			fileName += argv[i];
		}
		else
		{
			fileName = fileName + '_' + argv[i];
		}
	}
	fileName += ".cpp";
	fileName = std::regex_replace(fileName, r, "");

	std::cout << "fileName:" << fileName << std::endl;
	std::ofstream output("../" + fileName);
	if (source.is_open())
	{
		while (getline(source, line))
		{
			// std::cout << line << '\n';
			if (output.is_open())
			{
				output << line << '\n';
			}
		}
		source.close();
		output.close();
	}
	else
	{
		std::cout << "unable to open file";
	}
	return 0;
}