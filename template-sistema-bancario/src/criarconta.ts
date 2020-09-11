import fs from 'fs'
import { readDatabase } from '.'
import moment from 'moment'
moment.locale("pt-br")
type Client = {
   name: string,
   CPF: string,
   dateOfBirth: moment.Moment
}
type Balance = {
        value: number,
        date: moment.Moment,
        description: string
}
function createAccount(client: Client, balance:Balance): void {
    const today = moment()
    const dateBirth = client.dateOfBirth
    const diffInYears = today.diff(dateBirth, "years")
    if(diffInYears > 18) {
        const fileData: string = fs.readFileSync('./data.json').toString()
        const allClients = JSON.parse(fileData)
        allClients.push(client)
        fs.writeFileSync('./data.json', JSON.stringify(allClients, null, 2))
        console.log("Conta cadastrada!")
        console.log(readDatabase())
    } 
    else{
        console.log("Idade menor que 18 anos. Não é possível criar conta")
    }
}
createAccount({name: "Pedro", CPF: "222.111.111-11", dateOfBirth: moment("10/10/1999", "DD/MM/YYYY"), {value: 100, date: moment(), description: "Saldo Atual"}})