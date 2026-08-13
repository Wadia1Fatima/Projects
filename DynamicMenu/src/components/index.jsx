import MenuList from './menu-list'
import './style.css'

export default function DynamicMenu({menus = []}){
    return (
        <div className='box'>
            <h1>Dynamic Menu</h1>
            <div className='dynamic-menu-container'>
                <MenuList list={menus} />
            </div>
        </div>
    )
}