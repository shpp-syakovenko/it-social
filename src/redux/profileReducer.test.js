import React from 'react';
import profileReducer, {addPostActionCreate, deletePostActionCreate} from "./profileReducer";



it('add Post Profile', () => {

// Инициализация (воходяшие данный)
    let action = addPostActionCreate('serglife add new post');
    let startState = {
        postData: [
            {id: 0, message: 'Hello world!!!', like: 3},
            {id: 1, message: 'First post!', like: 7},
            {id: 2, message: 'Second post', like: 2}
        ]
    };
// Выполняем действие какое то
    let newState = profileReducer(startState, action);
// Ожидание результата

    expect(newState.postData.length).toBe(4);

});

it('add Post Profile', () => {

// Инициализация (воходяшие данный)
    let action = addPostActionCreate('serglife add new post');
    let startState = {
        postData: [
            {id: 0, message: 'Hello world!!!', like: 3},
            {id: 1, message: 'First post!', like: 7},
            {id: 2, message: 'Second post', like: 2}
        ]
    };
// Выполняем действие какое то
    let newState = profileReducer(startState, action);
// Ожидание результата

    expect(newState.postData[3].message).toBe('serglife add new post');

});

it('Delete Post Profile', () => {

// Инициализация (воходяшие данный)
    let action = deletePostActionCreate(1);
    let startState = {
        postData: [
            {id: 0, message: 'Hello world!!!', like: 3},
            {id: 1, message: 'First post!', like: 7},
            {id: 2, message: 'Second post', like: 2}
        ]
    };
// Выполняем действие какое то
    let newState = profileReducer(startState, action);
// Ожидание результата

    expect(newState.postData.length).toBe(2);

});

