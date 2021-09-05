export async function get() {
    const response = await fetch('https://automotive-d9550-default-rtdb.firebaseio.com/feedbacks.json');
    const object = await response.json();
    // Switch object to array to use array methods
    const array = Object.values(object);
    return array;
}

export async function add(obj) {
    await fetch('https://automotive-d9550-default-rtdb.firebaseio.com/feedbacks.json', {
        method: 'POST',
        body: JSON.stringify(obj)
    });
}