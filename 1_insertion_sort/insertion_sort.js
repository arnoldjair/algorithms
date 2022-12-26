function insertion_sort(array) {
  console.log("Initial array", array);

  for (var i = 1; i < array.length; i += 1) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }

  console.log("Sorted array", array);
  return array;
}

insertion_sort([4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 10]);
