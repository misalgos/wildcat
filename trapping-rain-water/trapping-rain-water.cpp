class Solution {
public:
  int trap(vector<int>& height) {
        int ans = 0, current = 0;
        stack<int> st;
        while(current < height.size()) {
            while(!st.empty() && height[current] > height[st.top()]) {
                int top = st.top();
                st.pop();
                if(st.empty()) break;
                int distance = current - st.top() - 1;
                int bh = min(height[current], height[st.top()]) - height[top];
                cout<<"height[current] "<<height[current]<<"   height[st.top()] "<<height[st.top()]<<endl;
                ans += distance * bh; 
            }
            st.push(current++);
        }
        return ans;
    }
};