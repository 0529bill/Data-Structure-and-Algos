function binarySearch(numberArr, target) {
  // 取得陣列中間的 index
  let middleIndex = Math.floor(numberArr.length / 2);

  // 如果找到就回傳 true
  if (numberArr[middleIndex] === target) {
    return true;
  }

  // 如果還沒找到，而且 numberArr 只剩一個元素，表示找不到
  if (numberArr.length === 1) {
    return false;
  }

  // 如果還沒找到
  if (target > numberArr[middleIndex]) {
    // 且 target 大於中間的數值，則取後半段的陣列再搜尋
    return binarySearch(numberArr.slice(middleIndex, numberArr.length), target);
  } else if (target < numberArr[middleIndex]) {
    // 且 target 小於中間的數值，則取前半段的陣列再搜尋
    return binarySearch(numberArr.slice(0, middleIndex), target);
  }
}

//resources: https://pjchender.blogspot.com/2017/09/binary-search.html
