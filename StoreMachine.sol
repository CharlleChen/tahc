// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    
    string public text;

    /**
     * @dev Store value in variable
     * @param _text value to store
     */
     
    function store(string memory _text) public {
        bytes memory _old = bytes(text);
        bytes memory _middle = bytes('\n\t\n'); // article dilimiter
        bytes memory _new = bytes(_text);
        
        string memory temp = new string(_old.length + _middle.length + _new.length);
        bytes memory new_text = bytes(temp);
        uint k = 0;
        for (uint i = 0; i < _old.length; i++) new_text[k++] = _old[i];
        for (uint i = 0; i < _middle.length; i++) new_text[k++] = _middle[i];
        for (uint i = 0; i < _new.length; i++) new_text[k++] = _new[i];
        text = string(new_text);
        
        // arr.push(_text);
        // text = text + temp;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns ( string memory){
          
        return text;
    }
}