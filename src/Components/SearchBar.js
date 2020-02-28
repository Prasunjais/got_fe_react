import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { searchForBattles } from '../Services/Battles';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const { Option } = AutoComplete;

const searchResult = async (query) => {
  let searchWithLocation = await searchForBattles(false, query, false);
  let searchWithKing = await searchForBattles(query, false, false);
  let searchWithType = await searchForBattles(false, false, query);

  return [{
    query,
    category: `King`,
    count: searchWithKing.results.length,
  }, {
    query,
    category: `Location`,
    count: searchWithLocation.results.length,
  }, {
    query,
    category: `Type`,
    count: searchWithType.results.length,
  }]
}

function renderOption(item) {
  return (
    <Option key={`${item.category},${item.query}`} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on &nbsp;
          <a
            href={`https://gotbackend.herokuapp.com/api/v1/battle/search?location=${item.query}&skip=0&limit=10`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}


const searchAPIDebounced = AwesomeDebouncePromise(searchResult, 30);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  onSelect = (value) => {
    this.props.updateTheBattleDetails(value);
    console.log('Im selected ', value);
  }

  handleSearch = async (value) => {
    this.setState({ dataSource: value ? [] : [], });
    const result = await searchAPIDebounced(value);
    this.setState({ dataSource: result ? result : [] });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: 400 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%', color: 'black' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder="Search for GOT"
          optionLabelProp="text"
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}

export default SearchBar;