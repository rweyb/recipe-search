import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

export const FavoritesRecipeState = atom({
    key: 'FavoritesRecipeState',
    default: [],
});


export default function FavoritesAtom() {
    const [todoList, setTodoList] = useRecoilState(FavoritesRecipeState);


}
