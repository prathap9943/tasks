function longestPalindrome(str = "") {
  const n = str.length;
  let max = 1;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let flag = true;

      for (let k = 0; k < (j - i + 1) / 2; k++)
        if (str.charAt(i + k) != str.charAt(j - k)) flag = false;
      if (flag && j - i + 1 > max) {
        start = i;
        max = j - i + 1;
      }
    }
  }
  console.log(str.substring(start, start + max));
}

// Send your string in parameters

longestPalindrome("Malayalam");
