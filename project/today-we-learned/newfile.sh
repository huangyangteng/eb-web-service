#!/bin/bash
read -d "!" var

function touchfile()
{
    touch hyangteng.md lipeng.md yanlu.md yaocicen.md wulijiao.md fanyuling.md
}
mkdir -p  $var/1 $var/2 $var/3 $var/4 

cd $var/1 && touchfile;
cd -;
cd $var/2 && touchfile;
cd -;
cd $var/3 && touchfile;
cd -;
cd $var/4 && touchfile;
cd -;
#touch hyangteng.md zhouqin.md
