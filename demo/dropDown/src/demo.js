import styles from './demo.module.less'
import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { Button, Dropdown, Menu } from 'antd'
import SearchInput from './SearchInput'

function MenuItem(props) {
  let { className } = props
  return <div className={className}>
    {props.children}
  </div>
}

class App extends PureComponent {

  state = {
    visible: false
  }

  _onVisibleChange = (visible) => {
    this.setState({ visible })
  }

  _handleValueChange = () => {

  }

  _renderMenu = () => {
    const data = ['1', '2', '3']
    return <Menu style={{ minHeight: '300px' }}>
      <MenuItem className={styles['currency-dropdown-menu']}>
        <SearchInput placeholder='搜索'
                     onChange={this._handleValueChange}/>
      </MenuItem>
      {data.map((item, index) => {
        return <Menu.Item key={index}>
          <div>{item}</div>
        </Menu.Item>
      })}
    </Menu>
  }

  render() {
    const { visible } = this.state
    return (
      <Dropdown visible={visible}
                trigger={['click']}
                overlay={this._renderMenu()}
                overlayClassName={styles['currency-dropdown']}
                onVisibleChange={this._onVisibleChange}>
        <Button className={styles['btn']}>点击</Button>
      </Dropdown>
    )
  }
}

let el = document.createElement('div')
el.id = 'app'
document.body.appendChild(el)
render(<App/>, el)
