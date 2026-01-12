class AppEmitter extends EventEmitter {
    constructor() { super();}

    on(event, listener) {
        super.on(event, listener);
    }

    emit(event, ...args) {
        super.emit(event, ...args);
    }

    off(event, listener) {
        super.off(event, listener);
    }
}

const app = new AppEmitter();

app.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

app.emit('greet', 'Alice');

app.off('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

app.emit('greet', 'Bob'); // No output since listener is removed