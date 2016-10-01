import { SearchBar } from 'antd-mobile'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }
  onSearchChange(value) {
    this.setState({ value });
  }
  render() {
    return(
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onCancel={(value) => { alert(`${value}, 取消事件自定义`); }}
          cancelText="搜索"
          showCancelButton
          onChange={::this.onSearchChange}/>
      </div>
      )
  }
}