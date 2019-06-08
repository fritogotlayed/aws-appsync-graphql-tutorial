'use strict';
const GraphQL = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = GraphQL
const PostType = new GraphQL.GraphQLObjectType({
    name: 'Post',
    description: 'Post Type',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Id of the post',
        },
        title: {
            type: GraphQLString,
            description: 'Title of the post',
        },
        url: {
            type: GraphQLString,
            description: 'URL of the post',
        },
        author: {
            type: GraphQLString,
            description: 'Name of the Author who created the post'
        },
        ups: {
            type: GraphQLInt,
            description: 'Total number of up votes'
        },
        downs: {
            type: GraphQLInt,
            description: 'Total number of down votes'
        },
        content: {
            type: GraphQLString,
            description: 'Markdown content of post'
        }
    })
})

module.exports = PostType