function getKthNum(arr, low, high, k){
    if(!arr || arr.length === 0){
        return;
    }
    var p = quickSort(arr, low, high);
    if((p+1) === k){
        console.log(arr[p]);
        return arr[p];
    }else if((p+1) > k){
        getKthNum(arr, low, p-1, k);
    }else{
        getKthNum(arr, p+1, high, k);
    }
}
function quickSort(arr, low, high){
    var p = arr[low];
    while(low < high){
        while(low < high && arr[high] < p){
            high--;
        }
        if(low < high){
            arr[low++] = arr[high];
        }
        while(low < high && arr[low] > p){
            low++;
        }
        if(low < high){
            arr[high--] = arr[low];
        }
    }
    arr[low] = p;
    return low;
}
var a = [10,7,8,6,3,1,5,2,4,9];
getKthNum(a, 0, 9, 6);
