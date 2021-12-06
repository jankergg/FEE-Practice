#include "question/1091_Shortest_Path_in_Binary_Matrix.cpp"
#include "regex"
#include "algm/parse.h"
int main(int argc, char *argv[])
{
    string str = "[[\"[[0,1],[1,0]]\"],[\"[[0,0,0],[1,1,0],[1,1,0]]\"],[\"[[1,0,0],[1,1,0],[1,1,0]]\"]]";
    vector<vector<string>> arr = parseStringArrArr(str);
    for (int i = 0; i < arr.size(); i++)
    {
      vector<string> args = arr[i];
      Solution *s = new Solution();
      vector<vector<int>> arg0 = parseIntegerArrArr(args[0]);
      int result=s->shortestPathBinaryMatrix(arg0);
      string resultabc =serializeInteger(result);
      cout << "resultabc"+to_string(i)+":" << resultabc <<"resultend"<< endl;
    }
    return 0;
}