export const toObject= (data)=>
{
    var d = {};
    for (var i = 0; i < data.length; ++i){
        d[i] = data[i];
    }
   return d;
}