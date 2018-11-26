var args = process.argv;


var total = 0;
for(i=0;i<args.length;i++){
   if( i > 1 ){
     total += Number(args[i]);
   }
}
console.log(args);
console.log(total);

