import api from '../api.json';
import { normalize, schema } from 'normalizr';

//ESTA CLASE SIRVE PARA NORMALIZAR DATOS Y ASÍ AHORRARLE PROCESO Y DARLE FACILIDAD DE BUSQUEDA
// A EL ARCHIVO API



// si el elemento ya tiene un elemento llamado 'id' no es encesario idAttribute y se puede dejar {}
const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category) };

const normalizedData = normalize(api, categories);

export default normalizedData;