import { useEffect, useState } from 'react'
import './App.css'
import NewItem from './components/NewItem'

function App() {
  var url = 'https://67c84bd20acf98d07085e3f3.mockapi.io/recipes'
  var [recipes, setRecipes] = useState([])

  useEffect(() => {
    var fn = fetch(url)
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        console.log(data);
      })
  }, [])

  return (
    <>
      <div class="container">
        <div>
          <p><span>Home ></span> <span>Your Recipe Box</span></p>
        </div>

        <div>
          <h1>Emma Gonzalez's Recipe Box</h1>
        </div>

        <div class="profile"> 
          <div class="avatar">
            <img src="https://res.cloudinary.com/dne3wt0ys/image/upload/v1741180745/avatar_uqbkd6.png" alt="" />
          </div>
          <div class="info">
            <div class="sub-info1">
              Emma Gobnzalez is a deputy editor at Cheftify, bringing her expertise as a former cooking editor at The Los Angeles Times.
              She is also an accomplished author, contributing to numerous cookbooks and food publication.
              Originally from East Los Angeles, Emma now resides in New York City, where she explore a wide range of culinary delights.
            </div>
            <div class="sub-info2">
              <span>6.5k Subscribes</span>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul class="recipes">
          {
            recipes.map((recipe, index) => {
              return (
                <NewItem key={index} image={recipe.image} name={recipe.name} time={recipe.time} />
              )
            })
          }
        </ul>
      </div>
      
    </>
  )
}
export default App
