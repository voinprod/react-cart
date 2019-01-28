import React, { Component } from 'react'
import { Menu, Dropdown, Feed, Card } from 'semantic-ui-react'

const HeaderMenu = ({ totalPrice, count, items }) => (

    <Menu>
        <Menu.Item name='browse' >
            Магазин книг
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Итого: <b>{totalPrice}</b> руб.
                    </Menu.Item>

            <Menu.Item name='help' >
                Корзина: <b>{count}</b>
            </Menu.Item>
            <Menu.Item>
                <Dropdown text='File'>
                    <Dropdown.Menu>
                        <Card>
                            <Card.Content>
                                {items.map(item => {
                                    return <Feed.Event key={item.id}>
                                        <Feed.Label image={item.image} />
                                        <Feed.Content>
                                            <Feed.Date content={item.price} />
                                            <Feed.Summary>
                                                {item.title}
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                })}
                            </Card.Content>
                        </Card>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu.Menu>
    </Menu>

)
export default HeaderMenu;