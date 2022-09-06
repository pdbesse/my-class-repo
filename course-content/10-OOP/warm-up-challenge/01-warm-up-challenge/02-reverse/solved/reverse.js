function reverse(array) {
    let front = 0;
    let rear = array.length - 1;
    
    while (front < rear) {
        // swap front and rear
        let swap = array[front];
        array[front] = array[rear];
        array[rear] = swap;

        // move inwards
        front = front + 1;
        rear = rear - 1;
    }

    return (array);
}

console.log(reverse([0,1,2,4,8]));