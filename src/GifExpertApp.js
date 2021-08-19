import React ,{useState} from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

const [categories, setCategories] = useState(['One punch']);

/*const handleAdd =()=> {
    setCategories([...categories, 'holk']);
    //setCategories(cat=> [...cat, 'hulk'])
}*/
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                                    key={category}
                                    category={category}
                                />
                    })
                }
            </ol>
        </div>
    )
}
export default GifExpertApp
