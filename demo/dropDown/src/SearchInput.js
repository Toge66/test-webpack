import React, { PureComponent } from 'react'
import { Input } from 'antd'

const Search = Input.Search

export default class SearchInput extends PureComponent {

  _handleInputChange = (e) => {
    this.setState({ value: e.target.value, })
    this.props.onChange && this.props.onChange(e)
  }

  _handleFocusBlur = (e) => {
    this.setState({ focus: e.target === document.activeElement, })
  }

  _handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value)
    }
  }

  _handleSearch = () => {
    this.setState({ value: '' })
    this.props.onChange && this.props.onChange({ target: { value: '' } })
  }

  render() {
    const { placeholder } = this.props
    return <Search
      placeholder={placeholder}
      onChange={this._handleInputChange}
      onFocus={this._handleFocusBlur}
      onBlur={this._handleFocusBlur}
      onPressEnter={this._handleSearch}
      onSearch={this._handleSearch}
    />
  }
}