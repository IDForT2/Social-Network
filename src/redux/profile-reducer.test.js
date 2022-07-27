import profileReducer, {deletePost, newPostCreator} from "./profile-reducer";

let state = {
    posts: [
        {
            id: 0,
            message: 'Hello!',
            likesCount: 15
        },
        {
            id: 1,
            message: 'How are you?',
            likesCount: 20
        }]
};

it("length of post should be incremented", () => {
    let action = newPostCreator("Test");

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
    let action = newPostCreator("Test");

    let newState = profileReducer(state,action);

    expect(newState.posts[0].message).toBe("Test");
});

it("after deleting length of messages should be decremented", () => {
    let action = deletePost(1);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(1);
});

it("after deleting length shouldn't be decremented id id is incorrect", () => {
    let action = deletePost(1000);

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(2);
});
