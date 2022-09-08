// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract NftDrive{
    string[] public arr;
    
 struct Archive {
        string fileName;
	    string fileAddress;
 } 
     Archive archive;

    function upFile(string memory descrip, string memory dir) public {
        
        archive = Archive(descrip,dir);
        
    }
    function saveFile(
    ) public returns(string[] memory){  
        
          
        arr.push(archive.fileName);
		arr.push(archive.fileAddress);	
        
    
        return arr;  
    }  

function readFiles() public view returns(
      string[] memory){  
     
        return (arr);  
    }  


    }