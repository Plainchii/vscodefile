

public class Solution {
    public static void main(String[] args) {
        Solution test = new Solution();
        int []nums = {3,2,2,0,4};
        System.out.println(test.canJump(nums));

    }
    
    public int canJump(int[] nums) {
        int i = 0;
        int n = nums.length;
    while(i<n-1){
        i += nums[i];
        if(i>=n-1)
        return 1;
        
        if(nums[i]==0){
            i -= 2;
        }
        if(i == 1)
        return 0;

        
    }
    return 0;
}
}

