import React from 'react'
import { Menu, Input } from 'semantic-ui-react'




const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
    return (
        <Menu text vertical>
            <Menu.Item header>Сортировать по</Menu.Item>
            <Menu.Item

                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >Все</Menu.Item>
            <Menu.Item

                active={filterBy === 'priceLow'}
                onClick={setFilter.bind(this, 'priceLow')}
            >Цена по возрастанию</Menu.Item>
            <Menu.Item

                active={filterBy === 'priceHigh'}
                onClick={setFilter.bind(this, 'priceHigh')}
            >Цена по убыванию</Menu.Item>
            <Input icon="search" onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Search...' />
        </Menu>
    )
}

export default Filter