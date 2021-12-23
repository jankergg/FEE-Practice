#include <iostream>
#include <vector>
#include "utils/print.h"

/**
 * 1. define a pivot
 * 2. iterate through arr, swap numbers bigger than pivot to right, and smaller ones to left2. iterate through arr, swap numbers bigger than pivot to right, and smaller ones to left
 * 3. choose next pivot. (the number at high)
 */
int partition(int *arr, int low, int high)
{
	int i = low, j = high;
	while (i < j)
	{
		while (i <= high && arr[i] <= arr[low])
		{
			i++;
		}
		while (arr[j] > arr[low])
		{
			j--;
		}

		if (i < j)
		{
			std::swap(arr[i], arr[j]);
		}
	}
	std::swap(arr[low], arr[j]);

	return j;
}

void quickSortRec(int *arr, int low, int high)
{
	if (low < high)
	{
		int pivotIndex = partition(arr, low, high);
		quickSortRec(arr, low, pivotIndex - 1);
		quickSortRec(arr, pivotIndex + 1, high);
	}
}

void quick_sort(int *arr, int size)
{
	quickSortRec(arr, 0, size - 1);
}

int main(int argc, char **argv)
{
	using namespace std;
	int a[] = {55, 23, 26, 2, 18, 78, 23, 8, 2, 3};

	cout << "Before Sorting" << endl;
	for (int i : a)
	{
		cout << i << ", ";
	}
	cout << endl;

	quick_sort(a, sizeof(a) / sizeof(int));

	cout << endl
		 << "After Sorting" << endl;
	for (int i : a)
	{
		cout << i << ", ";
	}
	cout << endl;
	return 0;
}
