import java.util.PriorityQueue;

public class Array_reducer {
	static final PriorityQueue<Integer> numbers = new PriorityQueue<>();

	public static void main(String[] args) {
		int[] testcase1 = { 1, 2, 3 };
		int test1 = reducer(testcase1);

		int[] testcase2 = { 4, 6, 8 };
		int test2 = reducer(testcase2);
		System.out.println(test1);
		System.out.println(test2);

	}

	public static int reducer(int[] nums) {
		if (nums.length == 2) {
			return nums[0] + nums[1];
		}
		for (int i = 0; i < nums.length; ++i) {
			numbers.add(nums[i]);
		}
		int res = 0;
		while (!numbers.isEmpty()) {
			int a = numbers.poll();
			if (numbers.isEmpty()) {
				break;
			}
			int b = numbers.poll();
			int cost = a + b;
			res += cost;
			numbers.add(cost);
		}
		return res;
	}

}
