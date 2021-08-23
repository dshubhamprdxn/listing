import React, { Component } from 'react'
import Item from '../../component/Item/Item';
import ReactPaginate from 'react-paginate';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/action/dataAction';
import Spinner from '../../component/Spinner/Spinner';

import './Listing.css';

class Listing extends Component {

  componentDidMount () {
    this.props.onfetchDataStart(this.props.currentPage)
  }

  handlePageClick = (e) => {
    this.props.onfetchDataStart(e.selected + 1)
    this.props.onupdateCurrentPage(e.selected + 1)
  }
  
  render() {
    let item;
    let data = this.props.error ? <p>{this.props.error}</p>: null
    if (this.props.data) {
      item = this.props.data.map( (item, index) => {
        return (<Item 
          key={index}
          name={item.name} 
          gender={item.gender} 
          culture={item.culture}
          aliases={item.aliases}
          playedBy={item.playedBy} />
        )
      })
    }
    
    return (
      <section>
        <div className="wrapper">
          {data}
          {this.props.loading === null || this.props.loading === true ?
            <Spinner /> :
            <ul className="items">
              {item}
            </ul>
          }
          
          {this.props.data.length > 0 ? 
            <ReactPaginate 
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={this.props.totalPageCount}
            onPageChange={(e) => this.handlePageClick(e)}
            breakLabel="..."
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeLinkClassName={"active"}
            />
          : null}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      data: state.data,
      currentPage: state.currentPage,
      error: state.error,
      loading: state.loading,
      totalPageCount: state.totalPageCount
  }
}

const mapDispatcherToProp = (dispatch) => {
  return {
    onfetchDataStart: (currentPage) => dispatch(actionCreators.fetchDataStart(currentPage)),
    onupdateCurrentPage: (currentPage) => dispatch(actionCreators.updateCurrentPage(currentPage))
  }
}

export default connect(mapStateToProps, mapDispatcherToProp)(Listing)
