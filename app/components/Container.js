import React, {Component, createContext} from 'react'

export const MetaContext = createContext({
  title: '',
  setTitle: () => {},
})

export default class Container extends Component {
  setTitle = title => this.setState({title})

  state = {
    title: '',
    setTitle: this.setTitle,
  }

  render() {
    return (
      <MetaContext.Provider value={this.state}>
        {this.props.children}
      </MetaContext.Provider>
    )
  }
}
