// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './redux/counterSlice'
// import Home from './pages/Home'

// const App = () => {
//   const count = useSelector((state) => state.counter.value)
//   console.log(count)
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>app</h1>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <Home />
//     </div>
//   )
// }

// export default App



import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetPostsQuery, useAddPostMutation } from "./redux/apiSlice";

function App() {
  const [count, setCount] = useState(0);
  const [addPost] = useAddPostMutation();
  const { data, error, isLoading } = useGetPostsQuery({ url: "/comments" });
  console.log(data, error, isLoading);
  // console.log(data)

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  const handleSumbit = async () => {
    await addPost({ title: "New Post", body: "This is a new post", userId: 1 }); // this will trigger the addPost mutation
  };

  return (
    <>
      <h1>hello</h1>
      <button onClick={handleSumbit}>Add Post</button>
    </>
  );
}

export default App;