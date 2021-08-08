const { Conflux } = require("js-conflux-sdk");

(async function () {
    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })
    const me = cfx.wallet.addPrivateKey("0x89234C9E3D7C3E3EB1E18A2B8F0C1C1FE89A7BE67CF8F82759EE47A1F66DAC96")

    const abi = [{"inputs":[],"name":"retrieve","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_text","type":"string"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
    const contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACEKU0NYZF4BDB5ZJCR3W7CMAYGR0K9XZERJD3MGB1", abi })
    let status = await contract.store("Hello world!").sendTransaction({ from: me.address}).executed();
    console.log("status :", status)

    let text = await contract.retrieve()
    console.log("current text :", text.split('\n\t\n'))
})()

