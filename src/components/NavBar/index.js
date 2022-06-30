import { Menu } from 'antd';

const NavBar = ({items}) => {
    // console.log({items});
    // console.log(Array.isArray(items))

const episodes = items && items.map(item => {
    return <Menu.Item key={item.url}>
        {item.name}
    </Menu.Item>
})
    return (
        <>
            <Menu mode="vertical">{episodes}</Menu>
        </>)
}

export default NavBar;