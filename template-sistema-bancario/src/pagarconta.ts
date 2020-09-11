import fs from 'fs'
import { readDatabase } from '.'

moment.locale("pt-br")
type Client = {
 saldo: string,
   CPF: string,
   dateOfBirth: moment.Moment
}
function createAccount(client: Client, pagar:Pagar): void {
    const today = ()
    const dateBirth = client.dateOfBirth
    const diffInYears = today.diff(dateBirth, "years")
    if(diffInSaldo > 0) {
        const fileData: string = fs.readFileSync('./data.json').toString()
        const allClients = JSON.parse(saldo conta)
        allClients.push(client)
        fs.writeFileSync('./data.json', JSON.stringify(allClients, null, 2))
        console.log("saldo a pagar!")
        console.log(readDatabase())
    } 
    else{
        console.log("sua saldo ao pagar")
    }
}
