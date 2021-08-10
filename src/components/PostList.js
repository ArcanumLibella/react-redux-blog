import postcss from 'postcss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderedPosts() {
        // return posts.map(post => {
            return (
                <div className="p-4 mb-4 bg-indigo-50 rounded-md">
                    <h3 className="font-bold text-md">Post name</h3>
                    <p className="text-base">Lorem ipsum blablabla</p>
                    <h4 className="font-bold text-md">Author name</h4>
                </div>
            )
        // })
    }

    render() {
        return (
            <div className="w-full p-8 bg-indigo-200 rounded-md">
                <h2 className="font-black font-xl">POST LIST</h2>
                <div className="mt-4 p-4 bg-indigo-100 rounded-md">
                    {this.renderedPosts()}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     // return ()
// }

export default connect(null, {fetchPosts})(PostList)
