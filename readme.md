virtual dom compare with real dom and only make changes in real dom only those element which are not present in real dom 

component name always start with capital letter

lecture 4 -- I am confused in lecture 4 custom react

lectur 5 -- updation of ui controlled by react hooks  in hooks we can update the data and change the data.

### with the help of hooks we can use class component ffeatures in functional component such as state , life cycle , pure componnet etc 

### Again we are revising react in Development


### You can make custom tag in React with the help of JSX

### Dom
### reconciliation --
 The algorithm React uses to diff one tree with another to determine which parts need to be changed.

 Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

# update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

# 
readme revision file