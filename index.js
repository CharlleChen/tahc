const { Conflux } = require("js-conflux-sdk");

const form = document.getElementById('sendForm');
const messages = document.getElementById('messages');
const msg = document.getElementById('msg');
const closeBtn = document.getElementById('close');
const popup = document.getElementById('popup');

let contract;
let me

(async function () {
  const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })
  me = cfx.wallet.addPrivateKey("0x89234C9E3D7C3E3EB1E18A2B8F0C1C1FE89A7BE67CF8F82759EE47A1F66DAC96") // insecure, I know...

  const abi = [{"inputs":[],"name":"retrieve","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_text","type":"string"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
  contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACEKU0NYZF4BDB5ZJCR3W7CMAYGR0K9XZERJD3MGB1", abi })
  
  let text = await contract.retrieve()
  text = text.split('\n\t\n')
  console.log("current text :", text)

  for(i =0;i<text.length; i++) {
    if(text[i].trim()) {
      addMsg(text[i]);
    }
  }
  
})()

// const contract = await init_contract()

// 

closeBtn.addEventListener('click', () => {
	popup.style.display = 'none';
});


form.addEventListener('submit', async function (e) {
	e.preventDefault();
	
	const message = msg.value;

  const status = await contract.store(message).sendTransaction({ from: me.address}).executed(); // a promise
  console.log("status :", status)
  addMsg(message);


});


const addMsg = (msg) => {
	const messageEl = document.createElement('li');
	messageEl.innerText = msg;
	messages.append(messageEl);
}
