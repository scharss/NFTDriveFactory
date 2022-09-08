// https://rinkeby.etherscan.io/address/0x88351c289c89f2d0988f475471f6bb43dabe8da6#readContract

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract NftDrive is ERC1155, ERC1155Burnable, Ownable {
    
    constructor(address owner) ERC1155("https://ipfs.io/ipfs/bafybeibo6fspneau2qcd6i23pe7zo6fpfwax3fju46lm35o33jvt34yl6e/0000000000000000000000000000000000000000000000000000000000000001.json") {
	
					 _mint(owner, 1 /* Id  */, 1 /* Cantidad */, "");
                     transferOwnership(owner);
	
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



contract NftDriveFactory is Ownable {
    

 

     function create(address owner) public payable {
       require(msg.value >= 100000000000000, "You need to spend more ETH!");
        new NftDrive(owner);
        
    }
    
       

    function withdrawMoney() public onlyOwner{
        address payable to = payable(msg.sender);
        to.transfer(getBalance());
    }



      function getBalance() public view  returns (uint256) {
        return address(this).balance;
    }
 
    

   
}