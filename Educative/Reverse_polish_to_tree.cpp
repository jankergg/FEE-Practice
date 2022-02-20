#include <iostream>
#include <string>
#include <vector>

using namespace std;
class Node {
   private:
    char oper;
    int val;
    Node *left;
    Node *right;

   public:
    Node(char oper, Node *left, Node *right) : oper(oper) {
        this->left = left;
        this->right = right;
    }
    Node(int val, Node *left, Node *right) : val(val) {
        this->left = left;
        this->right = right;
    }
};

// Node reverse_polish_to_tree(string &str) {
//     return Node;
// }

int main(int argc, char **argv) {
    return 0;
}
