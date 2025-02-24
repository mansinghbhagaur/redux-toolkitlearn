import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../redux/counterSlice'
import { fetchData } from '../redux/dataSlice';
const Home = () => {
      // console.log(useSelector, "hello")
      const { value } = useSelector((state) => state.counter)
      const { items, status, error } = useSelector((state) => state.data);
      const dispatch = useDispatch();

      console.log(items, status, error);

      useEffect(() => {
            dispatch(fetchData()) // api call function
      }, [dispatch])

      console.log(value, "hee")
      return (
            <div>
                  <h1>Home Page</h1>
                  <h1> {value}</h1>
                  <button onClick={() => dispatch(reset())} >Reset</button>
            </div>
      )
}

export default Home
