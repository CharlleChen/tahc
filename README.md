# tahc (the reverse of "chat")
An annonymous forum for women who have experienced sexual harrassment. They can share their experiences here but not fearing the security of their privacy. It is a demo for [Unihack 2021](https://unihack21.devpost.com/) and it only implements preliminary functions. Check the devpost blog [here](https://devpost.com/software/tahc) (Chinese). It has been awarded with "Best Blockchain Award (1000 CNY)" sponsored by Conflux. [Live Demo](https://charllechen.github.io/tahc/)

![award_certificate](/unihack_award.png)

# Technical specifications
- Solicity to write smart contract
- Deployed on the chain of [Conflux](https://confluxnetwork.org/)
- Mainly use javascript and Node Package Manager
- Used Browserify to compile npm dependency into Vanilla javascript
- The front-end design is adpated from [a project](https://codepen.io/FlorinPop17/full/rNNwRVp) by Florin Pop

# Usage
Web entry: index.html

# File structure
## Smart contract
- StoreMachine.sol: Solidity smart contract robot
- call.js: debug smart contract robot
- deploy.js: deploy smart contract to conflux network

## Website
- index.html: web entry
- bundle.js: index.js after browserify
- index.js: web
- style.css: web
