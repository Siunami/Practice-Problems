var size = function(size){
  for(size; size>0; size--){
      for(var x = "#"; (x.length) <= size; x += "#"){
        console.log(x);
    }
  }
}
size(4);
/*For any size, create right triangles of that size and for each size less than that
Ex: Size(3)

Output:
#
##
### (End of size three right triangle.)
#
## (End of size two right triangle.)
# (End of size one right triangle.)
*/
