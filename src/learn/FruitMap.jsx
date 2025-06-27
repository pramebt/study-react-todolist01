import React from 'react'

const FruitMap = () => {
  const text = "Hello eiei"
  const css = {color:"red"}
  const fruit = [{
    id: 1,
    title: "Apple"
  },
  {
    id: 2,
    title: "Mango",
  },
  {
    id: 3,
    title: "Grape",
  }]
  
  return (
    <div>
      {
        fruit.map((fruit,idx)=>{
          return (
            <div key={idx}>
              {fruit.id} : {fruit.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default FruitMap