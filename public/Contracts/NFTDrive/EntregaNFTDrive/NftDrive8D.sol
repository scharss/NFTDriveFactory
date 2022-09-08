// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract NftDrive is ERC1155, ERC1155Burnable, Ownable {
    constructor() ERC1155("https://ipfs.io/ipfs/bafybeibo6fspneau2qcd6i23pe7zo6fpfwax3fju46lm35o33jvt34yl6e/0000000000000000000000000000000000000000000000000000000000000001.json") {
	
					 _mint(msg.sender, 1 /* Id  */, 1 /* Cantidad */, "");
	}
	
	
	string[] private arr;
    string private dataStorage;
    

    function upData(string memory data) public onlyOwner {
        dataStorage = data;
        
    }
    function saveData(
    ) public onlyOwner returns(string[] memory){  
    
        arr.push(dataStorage);  
        	
        
    
        return arr;  
    }  

function getdata() public view onlyOwner returns(
      string[] memory){  
     
        return (arr);  
    }  


   

    function removeData(uint id) public onlyOwner{
    arr[id] = arr[arr.length - 1];
    arr.pop();
  }
	
	
	
	
	
	}