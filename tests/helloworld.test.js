import sayhello from '../utils/helloworld.js';
import assert from 'assert'

it ("Should say hello", ()=>{
    const hello = sayhello();

    assert.equal(hello, "hello");
})
