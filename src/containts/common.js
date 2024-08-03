export const url = 'https://chinese-food-db.p.rapidapi.com/'

export const KEY = '96191cad6emsh052d12666af54c3p1d2720jsn8ae6dd9c656f'
export const HOST = 'chinese-food-db.p.rapidapi.com'

export function handelMethod(method,key, host) {
    const options = {
        method: method,
        headers: {
            'x-rapidapi-key': key,
            'x-rapidapi-host': host
        }
    };
    return options;
}

// export function randomPrice(min, max, decimals = 2) {
//     const randomValue = Math.random() * (max - min) + min;
//     return parseFloat(randomValue.toFixed(decimals));
// }
  