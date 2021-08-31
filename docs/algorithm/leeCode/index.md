# leeCode 算法题

## 初级算法

### 数组

#### 删除排序数组中的重复项

**题目：**

`给你一个有序数组nums，请你原地删除重复出现的元素，使每个元素只出现一次，返回珊瑚后数组的新长度。不要使用额外的数组空间，必须原地修改输入数组并在使用O(1)额外空间的条件下完成`

**示例：**

`[1，1，2]  ---> 2`

`[0，0，1，1，1，2，2，3，3，4] ---> 5`

**解：双指针**

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    // 读题可知，有序数组，所以可以前后两个指针
    // 当数组长度为0，1时，直接返回数组长度 
    if (nums.length === 0 || nums.length === 1) return nums.length
    let x = 0, y = 1
    // 右指针每次右移一位，当左右指针数值相等时，左指针右移一位，同时将右指针的值赋给左指针
    while(y <= nums.length) {
        if(nums[y] !== nums[x]) {
            x += 1
            nums[x] = nums[y]
        }
        y++
    }
    return x
};
```





#### 买卖股票的最佳时机二

**题目：**

`给定一个数组prices，其中prices[i]是一支给定股票第i天的价格，设计一个算法来计算你所能获取的最大利润。尽可能地完成更多的交易(多次买卖一支股票)`

**示例：**

`[7, 1, 5, 3, 6, 4] ---> 7`

`[1, 2, 3, 4, 5] ---> 4`

`[7, 6, 4, 3, 1] ---> 0`

**解：**

```js
// 遍历：
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let index = 0, result = 0;
    while(true) {
        if(index + 1 >= prices.length) { return result }
        if(prices[index] < prices[index + 1]) {
            result += prices[index + 1] - prices[index]
        } 
        index++
    }
};

// 动态规划
```



#### 旋转数组

#### 存在重复元素

#### 只出现一次的数字

#### 两个数组的交集二

#### 加一

#### 移动零

#### 两数之和

#### 有效的数独

#### 旋转图像

### 字符串

。。。

### 链表

。。。

### 树

。。。

### 排序和搜索

。。。

### 动态规划

。。。

### 设计问题

。。。

### 数学

。。。

### 其他

。。。