const path=require("path");


//filepath
console.log(__filename)
//directory path
console.log(__dirname);
//lost portioin of filepath
console.log(path.basename(__filename));
//lost portioin of directory path
console.log(path.basename(__dirname));
//.characheter of the file
console.log(path.extname(__filename));
//.characheter of the directory(but it doesn't have any chaarachter)
console.log(path.extname(__dirname));
//it will show root,dir,base,ext,name into object formate
console.log(path.parse(__filename));
//ir will show noraml path form
console.log(path.format(path.parse(__filename)));
//it boolean its absolute 
console.log(path.isAbsolute(__filename));