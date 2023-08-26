const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync');

async function conersorMoeda() {
	const CPF = readlineSync.question('CPF sem pontos e hífens: ')
	const Browser = await puppeteer.launch({headless: false})
	const Page = await Browser.newPage()
	const Url = `https://smap14.mda.gov.br/extratodap/PesquisarDAP`
	await Page.goto(Url)
	const Botao = await Page.$("#corpo > div > div > div:nth-child(1) > button")
	await Botao.click()
	await Page.waitForNavigation()
	const InputCpf = await Page.$("#txtCPF_CNPJ")
	await InputCpf.type(CPF)
	await Page.waitForNavigation()
	const PrintBtn = await Page.$("#btnExportar")
	await click()

	// await Browser.close()
}

conersorMoeda()