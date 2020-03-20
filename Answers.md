1. What problem does the context API help solve?

Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that will pass data to our reducers, reducers are functions that manage the changes in our state, and the store is where our state is held.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and the component state is local.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a node package that allows us to make our redux flow asynchronous and allows us to make api calls from our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer using redux because we spent more time with it than context so I feel more comfortable using it.
