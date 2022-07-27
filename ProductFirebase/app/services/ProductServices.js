import { async } from '@firebase/util';
import { doc, setDoc, collection, query, getDocs } from 'firebase/firestore';
import { loanConfiguration } from '../utils/FirebaseConfig';

loanConfiguration();

export const save = async (product) => {
    const productRef = doc(global.DB, "Productos", product.code);
    const resp = await setDoc(productRef, product);
}

export const getDataProducts = async () => {
    const q = query(collection(global.DB, 'Productos'));
    const resp = await getDocs(q);
    const data = [];
    resp.forEach((doc) => {
        data.push(doc.data());
    })
    return data;
}