import { doc, setDoc } from 'firebase/firestore';
import { loanConfiguration } from '../utils/FirebaseConfig';

loanConfiguration();

export const save = async (product) =>{
    const productRef = doc(global.DB, "Productos", product.code);
    const resp = await setDoc(productRef, product);
}