import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyFavoritesAction, removeFavoriteAction } from '../store/slices/favoritesSlice';

function Favorites() {
    

    const { favorites } = useSelector(state => state.favorite)


    let dispatch = useDispatch();

    const remove = (item) => {
        dispatch(removeFavoriteAction(item))
        // dispatch({ type: 'favorites/removeFavoriteAction', payload: item })

    }

    

    return (<>

        <h1>Favorites: {favorites.length}</h1>
        <button onClick={() => dispatch(emptyFavoritesAction())}>Empty Favorites</button>
        <hr />

        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map(favorite => (
                    <tr key={favorite.id}>
                        <td>{favorite.id}</td>
                        <td>{favorite.name}</td>
                        <td>{favorite.unitPrice}</td>
                        <td><button onClick={() => remove(favorite)}>Remove</button></td>

                    </tr>
                ))}
            </tbody>
        </table>

    </>)
}

export default Favorites