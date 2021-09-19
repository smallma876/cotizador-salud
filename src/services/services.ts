import { Customer } from "../models/customer";

export async function getCustomer(url: string){
    
    let customer = new Customer();

    try {
        
        const response = await fetch(url) 
        const data = await response.json();
    
        if(data[0].tipo === "success"){
            
            const customerAux = data[0].data.tercero
            customer.names = customerAux.nombres;
            customer.documenttype = customerAux.tipoDocumento;
            customer.documentnumber = customerAux.numDocumento;
            customer.dateofbirth = customerAux.fecNacimiento;
            customer.mobilenumber = customerAux.telefono;
            customer.dataprotection = true;
            customer.sendnews = true;
            customer.paternal = customerAux.apellidoPaterno;
            customer.maternal = customerAux.apellidoMaterno;
            customer.gender = customerAux.sexo;
            customer.insured = "0";
            customer.namestitular = "";

            return customer;

        }

    } catch (error) {
        console.log(error);
    
    }

    return customer;

}